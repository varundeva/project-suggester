export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="container mx-auto py-8 animate-pulse">
    <div className="h-6 bg-gray-200 rounded mb-4 w-1/2"></div>
    <div className="h-5 bg-gray-200 rounded mb-6 w-3/4"></div>
    <div className="h-10 bg-gray-200 rounded w-full"></div>
  </div>
  }