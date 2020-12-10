import { NextSeo } from 'next-seo'

import SearchForm from '@/components/home/SearchForm'
import Layout from '@/components/Layout'
import Card from '@/components/home/Card'
import { useState, useEffect } from 'react'
import useFetch from '@/hook/useFetch'

export default function Home({ getJobs }) {
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    setJobs(getJobs)
    console.log(jobs)
  }, [])

  return (
    <div className="app pb-10">
      <Layout>
        <NextSeo title="| Home" />
        <SearchForm />
        <div className="container mx-auto mt-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
            {jobs?.map(job => {
              return <Card key={job.id} data={job} />
            })}
          </div>
        </div>
        <a
          href=""
          className="bg-blue-600 hover:bg-blue-700 py-3 w-40 text-center block text-white rounded-sm mx-auto mt-6"
        >
          Load More
        </a>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const jobs = await useFetch('frontend', 'germany')
    return {
      props: {
        getJobs: jobs
      }
    }
  } catch (error) {
    console.log(error)
  }
}
