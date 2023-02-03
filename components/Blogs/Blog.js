import React from 'react'
import { useRouter } from 'next/router'
function Blog() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="container mx-auto max-w-screen-xl p-6 lg:py-16 lg:px-6">
      <div className="max-w-screen-sm text-left lg:mb-16 mb-8">
        <h2 className="mb-4 text-4xl lg:text-6xl tracking-tight font-extrabold text-white dark:text-white">
          {id}
        </h2>
        <p className="font-light text-gray-200 sm:text-xl dark:text-gray-400">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>
    </div>
  )
}

export default Blog