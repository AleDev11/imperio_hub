import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useMovie = (movieId?: string) => {
    const { data, error, isLoading, mutate } = useSWR(movieId ? `/api/movies/${movieId}` : null, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
    });

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useMovie;