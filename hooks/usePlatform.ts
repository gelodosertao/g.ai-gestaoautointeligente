import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';

export type PlatformType = 'web' | 'android' | 'ios' | 'native';

export const usePlatform = () => {
    const [platform, setPlatform] = useState<PlatformType>('web');
    const [isNative, setIsNative] = useState(false);

    useEffect(() => {
        const currentPlatform = Capacitor.getPlatform();
        setPlatform(currentPlatform as PlatformType);

        const native = Capacitor.isNativePlatform();
        setIsNative(native);

        // Log for debugging
        console.log(`[Platform-Hook] Running on: ${currentPlatform} (Native: ${native})`);
    }, []);

    return {
        platform,
        isNative,
        isAndroid: platform === 'android',
        isIOS: platform === 'ios',
        isWeb: platform === 'web'
    };
};
