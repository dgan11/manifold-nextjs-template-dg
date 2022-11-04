import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      {/* <Script src="https://connect.manifoldxyz.dev/2.0.13/connect.umd.min.js"></Script>
      <Script src="https://marketplace.manifoldxyz.dev/latest/marketplace.umd.min.js"></Script> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
