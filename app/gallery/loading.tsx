export default function Loading() { 
    return (
        <div className="flex justify-center items-center h-[800px]">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-5 border-b-5 border-green"></div>
            </div>
        </div>
    );
}