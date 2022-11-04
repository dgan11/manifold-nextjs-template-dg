import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* -- Stylesheets for connect and marketplace widgets -- */}
        <link rel="stylesheet" href="https://connect.manifoldxyz.dev/2.0.13/connect.css"></link>
        <link rel="stylesheet" href="https://marketplace.manifoldxyz.dev/latest/marketplace.css" />
        <script src="https://connect.manifoldxyz.dev/latest/connect.umd.js" async></script>
        <script src="https://marketplace.manifoldxyz.dev/latest/marketplace.umd.js" async></script>
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
        {/* -- Add Connect Widget -- */}
        {/* <Script src="https://connect.manifoldxyz.dev/2.0.13/connect.umd.min.js"></Script> */}
        {/* <div  
          data-widget="m-connect"
          data-client-id="b26f7ccf76221dc3ead994df950adeebd4da49e4f876ccf12fcc3c3264d5918d"
          data-app-name="dg"
          data-redirect-uri="https://davidgan.xyz/"
          data-network="1"
          data-grant-type="token"
          //// Optional Button Settings
          data-multi="true" // have WalletConnect as an option
          // data-fallback-provider={process.env.DATA_FALLBACK_PROVIDER}
          data-fallback-provider="wss://eth-mainnet.g.alchemy.com/v2/YAf6oc1YMm-1ubCZigOoM3Sy8Rl8akIg"
          data-show-chain="true" // show chain name
          data-show-balance="true" // show balance of wallet
          data-override-connect-text="Ligma" // Text on button
        >  
        </div> */}
        <div  
          data-widget="m-connect"
          data-delay-auth="true"
          data-network="1"
          //// Optional Button Settings
          data-multi="true" // have WalletConnect as an option
          data-fallback-provider={process.env.DATA_FALLBACK_PROVIDER}
          // data-override-connect-text="Ligma" // Text on button
          // data-show-chain="true" // show chain name
          // data-show-balance="true" // show balance of wallet

        >  
        </div>
        
        <br />
        <br />
        {/* ~~ Add Marketplace Widget component ~~ */}
        {/* <Script src="https://marketplace.manifoldxyz.dev/latest/marketplace.umd.min.js"></Script> */}
        <div
          data-widget="m-layout-complete-listing"
          data-id="444"
          data-network="1"
          // data-fallback-provider="wss://eth-mainnet.g.alchemy.com/v2/YAf6oc1YMm-1ubCZigOoM3Sy8Rl8akIg"
          // data-fallback-provider={process.env.DATA_FALLBACK_PROVIDER}
        ></div>
      </main>
    </div>
  )
}
