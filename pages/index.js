import Hero from '../components/hero'
import Layout from '../components/layout'
import Social from '../components/social'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Hero/>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}