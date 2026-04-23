import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';

export const useAppLifecycle = () => {
    const [isActive, setIsActive] = useState(true);
    const [lastActiveAt, setLastActiveAt] = useState<Date>(new Date());

    useEffect(() => {
        // 1. Web standard lifecycle
        const handleVisibilityChange = () => {
            const active = document.visibilityState === 'visible';
            console.log(`[Lifecycle] Web visibility changed: ${active ? 'Active' : 'Background'}`);
            setIsActive(active);
            if (active) setLastActiveAt(new Date());
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // 2. Capacitor native lifecycle
        let nativeListener: any = null;

        const setupNativeLifecycle = async () => {
            if (Capacitor.isNativePlatform()) {
                try {
                    const { App } = await import('@capacitor/app');
                    nativeListener = await App.addListener('appStateChange', (state: { isActive: boolean }) => {
                        console.log(`[Lifecycle] Native app state changed: ${state.isActive ? 'Active' : 'Background'}`);
                        setIsActive(state.isActive);
                        if (state.isActive) setLastActiveAt(new Date());
                    });
                } catch (err) {
                    console.warn('[Lifecycle] Capacitor App plugin not found, falling back to web events.');
                }
            }
        };

        setupNativeLifecycle();

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (nativeListener) {
                nativeListener.remove();
            }
        };
    }, []);

    return {
        isActive,
        lastActiveAt,
        isBackground: !isActive
    };
};
