import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* -- Manifold Connect Widget install -- */}
        <script src="https://connect.manifoldxyz.dev/2.0.13/connect.umd.min.js"></script>
        <link rel="stylesheet" href="https://connect.manifoldxyz.dev/2.0.13/connect.css"></link>
        {/* ~~ Marketplace Widget ~~ */}
        <script async src="https://marketplace.manifoldxyz.dev/latest/marketplace.umd.min.js"></script>
        <link rel="stylesheet" href="https://marketplace.manifoldxyz.dev/latest/marketplace.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://docs.manifold.xyz/v/manifold-for-developers/client-widgets/overview">
            Manifold
          </a>
          <span> </span>
          Next.js Template
        </h1>
        <br />
        {/* -- Add Connect Widget component  --*/}
        <div  
          data-widget="m-connect"
          data-grant-type="token"
          data-client-id={process.env.DATA_CLIENT_ID}
          data-app-name={process.env.DATA_APP_NAME}
          data-redirect-uri="https://davidgan.xyz/"
          data-network="1"
          //// Optional Button Settings
          data-multi="true" // have WalletConnect as an option
          data-fallback-provider={process.env.DATA_FALLBACK_PROVIDER}
          data-show-chain="true" // show chain name
          data-show-balance="true" // show balance of wallet
          data-override-connect-text="Connect Your Wallet" // Text on button
        >  
        </div>
        
        <br />
        <br />
        {/* ~~ Add Marketplace Widget component ~~ */}
        <div
          data-widget="m-layout-complete-listing"
          data-id="444"
          data-network="1"
        ></div>
      </main>
    </div>
  )
}
