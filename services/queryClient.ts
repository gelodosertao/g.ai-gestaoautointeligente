import { QueryClient } from '@tanstack/react-query';
import { get, set, del } from 'idb-keyval';
import { PersistedClient, Persister } from '@tanstack/react-query-persist-client';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24 * 7, // 7 days of cache
            staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
            retry: 2,
        },
    },
});

/**
 * Creates an IndexedDB persister instance for React Query
 */
export const createIndexedDBPersister = (idbValidKey: IDBValidKey = 'reactQuery'): Persister => {
    return {
        persistClient: async (client: PersistedClient) => {
            try {
                await set(idbValidKey, client);
            } catch (error) {
                console.error('Error persisting react-query cache:', error);
            }
        },
        restoreClient: async () => {
            try {
                return await get<PersistedClient>(idbValidKey);
            } catch (error) {
                console.error('Error restoring react-query cache:', error);
                return undefined;
            }
        },
        removeClient: async () => {
            try {
                await del(idbValidKey);
            } catch (error) {
                console.error('Error removing react-query cache:', error);
            }
        },
    };
};

export const idbPersister = createIndexedDBPersister();
