import Loader from '@/components/Loader';

export default function PageLoader() {
    return <div className="h-screen flex flex-col items-center justify-center">
        <div className='w-20 h-20'>
            <Loader />
        </div>
        <p className='mt-6'>Loading...</p>
    </div>;
}