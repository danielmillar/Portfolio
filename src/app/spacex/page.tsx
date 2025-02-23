'use client';
import { useEffect, useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

interface LaunchAdvisory {
    advisoryid: string;
    advisorystarttimestr: string;
    advisoryendtimestr: string;
    details: string;
    reason: string;
    summary: string;
    isActive?: boolean;
}

interface ApiResponse {
    advisories: LaunchAdvisory[];
}

function isAdvisoryActive(advisory: LaunchAdvisory): boolean {
    const now = new Date();
    const endDate = new Date(advisory.advisoryendtimestr.replace(/(\d{2})\/(\w{3})\/(\d{4})\s(.*)/, '$3-$2-$1 $4'));
    return endDate > now;
}

export default function SpaceXPage() {
    const [launchData, setLaunchData] = useState<LaunchAdvisory[]>([]);
    const [showActive, setShowActive] = useState(true); // Default to showing active
    const [nextUpdate, setNextUpdate] = useState(300); // 5 minutes in seconds
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Fetch data function
    const fetchAdvisories = async () => {
        try {
            const response = await fetch('https://faa-serverless-function.vercel.app/api/advisories', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: 'cors', // Explicitly set CORS mode
                cache: 'no-cache', // Disable caching to ensure fresh data
            });

            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json() as ApiResponse;
            
            // Type guard for the response
            if (!data || typeof data !== 'object' || !('advisories' in data)) {
                throw new Error('Invalid data format received');
            }

            // Validate each advisory
            const validAdvisories = data.advisories.filter(advisory => {
                const requiredFields = ['advisorystarttimestr', 'advisoryendtimestr', 'details', 'reason', 'summary'];
                return requiredFields.every(field => advisory[field as keyof LaunchAdvisory] !== undefined);
            });

            setLaunchData(validAdvisories);
            setError(null);
        } catch (err) {
            if (err instanceof Error) {
                setError(`Failed to load launch advisory data: ${err.message}`);
            } else {
                setError('Failed to load launch advisory data: Unknown error');
            }
            console.error('Fetch error:', err);
            setLaunchData([]);
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch and setup 5-minute interval
    useEffect(() => {
        fetchAdvisories();
        const interval = setInterval(() => {
            fetchAdvisories();
            setNextUpdate(300); // Reset countdown
        }, 300000); // 5 minutes in milliseconds

        return () => clearInterval(interval);
    }, []);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setNextUpdate((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Add filtered data computation
    const filteredLaunchData = launchData.filter(advisory => 
        showActive ? isAdvisoryActive(advisory) : !isAdvisoryActive(advisory)
    );

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Navigation />
            <main className="flex-grow max-w-7xl mx-auto px-4 pt-24 pb-20 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        SpaceX Launch Advisories
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-gray-600 dark:text-gray-400">
                            Current FAA advisories for upcoming SpaceX launches.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowActive(true)}
                                    className={`px-6 py-1.5 rounded-l-full text-sm min-w-[80px] ${
                                        showActive 
                                            ? 'bg-blue-500 text-white' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                                    }`}
                                >
                                    Active
                                </button>
                                <button
                                    onClick={() => setShowActive(false)}
                                    className={`px-6 py-1.5 rounded-r-full text-sm min-w-[80px] ${
                                        !showActive 
                                            ? 'bg-blue-500 text-white' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                                    }`}
                                >
                                    Past
                                </button>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Next update in: {Math.floor(nextUpdate / 60)}:{(nextUpdate % 60).toString().padStart(2, '0')}
                            </div>
                        </div>
                    </div>
                </div>

                {loading && (
                    <div className="text-center py-8">
                        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading advisory data...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-400">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLaunchData.map((advisory, index) => (
                        <LaunchAdvisoryCard 
                            key={advisory.advisoryid || index} 
                            {...advisory} 
                            isActive={isAdvisoryActive(advisory)}
                        />
                    ))}
                </div>

                {filteredLaunchData.length === 0 && !loading && !error && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        No {showActive ? 'active' : 'past'} advisories found
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

function LaunchAdvisoryCard({ 
    advisorystarttimestr, 
    advisoryendtimestr, 
    details = '', 
    reason, 
    summary,
    isActive 
}: LaunchAdvisory) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasValidDetails = details && typeof details === 'string' && details.trim().length > 0;
    
    if (!hasValidDetails) {
        return (
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {summary || 'No Title Available'}
                            </h2>
                            <p className="text-blue-600 dark:text-blue-400">
                                {reason || 'No Reason Provided'}
                            </p>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            {advisorystarttimestr && advisoryendtimestr 
                                ? `${advisorystarttimestr} - ${advisoryendtimestr}`
                                : 'Time window not available'}
                        </span>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded p-4">
                        <p className="text-yellow-600 dark:text-yellow-400">
                            No launch window details are currently available. Please check back later.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const formattedDetails = details.split('\n')
        .filter(line => line.trim())
        .map(line => {
            const parts = line.split('\t').map(part => part.trim());
            
            if (parts[0].includes("Primary/Backup Days") || parts[0].includes("Dates")) {
                return null;
            }


            if (parts[2] && parts[2].includes('Z')) {
                const [start, end] = parts[2].split('-');
                const formattedTime = `${start.replace('Z', '')} - ${end.replace('Z', '')} UTC`;
                parts[2] = formattedTime;
            }

            return parts;
        })
        .filter(Boolean); // Remove null entries

    // Find primary launch
    const primaryLaunch = formattedDetails.find(row => 
        row && row[0]?.toLowerCase().includes('primary')
    );

    // Extract date and time
    let primaryDate = 'Date not available';
    let primaryTime = 'Time not available';

    if (primaryLaunch) {
        if (primaryLaunch[1]) {
            const dateStr = primaryLaunch[1];
            if (dateStr.includes('/')) {
                const [startDay, endDatePart] = dateStr.split('/');
                const month = endDatePart.match(/[A-Za-z]+/)?.[0] || '';
                const endDay = endDatePart.match(/\d+/)?.[0] || '';
                
                primaryDate = `${startDay}/${endDay} ${month}`;
            } else {
                primaryDate = dateStr;
            }
        }
        
        if (primaryLaunch[2]) {
            primaryTime = primaryLaunch[2];
        }
    }

    const tableHeaders = ["Launch Window", "Date", "Time (UTC)"];

    const StatusBadge = () => (
        <span className={`
            px-2 py-0.5 rounded-full text-xs
            ${isActive 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}
        `}>
            {isActive ? 'Active' : 'Past'}
        </span>
    );

    return (
        <>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {summary}
                                </h2>
                                <StatusBadge />
                            </div>
                            <p className="text-blue-600 dark:text-blue-400">{reason}</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Primary:</span>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {primaryDate}
                                </span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                {primaryTime}
                            </span>
                        </div>
                        
                        <button 
                            onClick={() => setIsExpanded(true)}
                            className="group px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 justify-center
                                border border-gray-900 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <span className="text-sm">View all launch windows</span>
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div 
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setIsExpanded(false);
                        }
                    }}
                >
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
                        <div className="p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{summary}</h3>
                                    <p className="text-blue-600 dark:text-blue-400">{reason}</p>
                                </div>
                                <button 
                                    onClick={() => setIsExpanded(false)}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            {tableHeaders.map((header, index) => (
                                                <th key={index} className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {formattedDetails.map((row, index) => row && (
                                            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                {row.map((cell, cellIndex) => (
                                                    <td key={cellIndex} className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}