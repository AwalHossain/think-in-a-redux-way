
export default function Loading() {
    return (
        // loading animation from tailwindcss make it certain size and center it
        <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>

    )
}
