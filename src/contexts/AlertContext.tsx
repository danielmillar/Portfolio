'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from '@/components/ui/Alert';

type AlertItem = {
  id: number;
  message: string;
  duration?: number;
  isVisible: boolean;
};

type AlertContextType = {
  alerts: AlertItem[];
  showAlert: (message: string, duration?: number) => void;
  removeAlert: (id: number) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

let nextId = 0;
const MAX_ALERTS = 5;

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  const showAlert = (message: string, duration: number = 5000) => {
    const id = nextId++;
    const newAlert = {
      id,
      message,
      duration,
      isVisible: true,
    };

    setAlerts(prev => {
      if (prev.length >= MAX_ALERTS) {
        const [oldest, ...rest] = prev;
        return [...rest, newAlert];
      }
      return [...prev, newAlert];
    });

    setTimeout(() => {
      setAlerts(prev => 
        prev.map(alert => 
          alert.id === id 
            ? { ...alert, isVisible: false }
            : alert
        )
      );

      setTimeout(() => {
        setAlerts(prev => prev.filter(alert => alert.id !== id));
      }, 300);
    }, duration);
  };

  const removeAlert = (id: number) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === id 
          ? { ...alert, isVisible: false }
          : alert
      )
    );

    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== id));
    }, 300);
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert, removeAlert }}>
      <div className="fixed top-4 right-4 z-[9999] flex flex-col-reverse gap-4">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            isOpen={alert.isVisible}
            onClose={() => removeAlert(alert.id)}
            message={alert.message}
            duration={alert.duration}
          />
        ))}
      </div>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
} 