import { NextSeo } from 'next-seo'

import SearchForm from '@/components/home/SearchForm'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <div className="app">
      <Layout>
        <NextSeo title="| Home" />
        <SearchForm />
      </Layout>
    </div>
  )
}
