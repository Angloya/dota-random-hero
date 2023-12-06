'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter();
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    const backToMain = () => {
        router.push('/');
    };

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h2 className='text-xl'>Something went wrong!</h2>
            <div className='grid grid-cols-2 gap-2'>
                <button
                    type="button"
                    className='m-6 p-2 w-36 rounded bg-gray-500 cursor-pointer'
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </button>

                <button
                    type="button"
                    className='m-6 p-2 w-36 rounded bg-gray-500 cursor-pointer'
                    onClick={backToMain}
                >
                    Main page
                </button>
            </div>
        
        </div>
    );
}