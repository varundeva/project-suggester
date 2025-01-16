export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="container mx-auto py-8 px-8 lg:px-0 sm:px-4 animate-pulse">
    <div className="h-8 bg-gray-400 rounded w-1/3 mb-4"></div>
    <div className="h-6 bg-gray-400 rounded w-2/3 mb-6"></div>
    <div className="h-6 bg-gray-400 rounded w-2/3 mb-6"></div>
    <div className="h-6 bg-gray-400 rounded w-2/3 mb-6"></div>
    <div className="h-6 bg-gray-400 rounded w-2/3 mb-6"></div>
    <div className="h-60 bg-gray-400 rounded"></div>
  </div>
  }