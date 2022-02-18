import Footer from '../components/footer'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Menu from '../components/menu'
import Social from '../components/social'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      {/* <Menu /> */}

      <Hero />

      {/* <Footer /> */}
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