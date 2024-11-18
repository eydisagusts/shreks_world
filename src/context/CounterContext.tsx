'use client';
import React from 'react';
import { createContext, useState, type ReactNode } from 'react'

interface CounterProviderProps {
    children: ReactNode;
}

export const CounterContext = createContext<{ count: number; incrementCounter: () => void } | undefined>(undefined);

export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
    const [count, setCount] = useState<number>(0);

    const incrementCounter = () => {
        setCount((c) => c + 1);
    };

    return (
        <CounterContext.Provider value={{ count, incrementCounter }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = React.useContext(CounterContext);
    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
}