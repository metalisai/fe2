import Image from 'next/image'
import styles from './page.module.css'
import Menu from './menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoCont}>
          <Image src="./logo.svg" alt="logo" width={128} height={128} />
        </div>
        <Menu />
      </div>
      <main className={styles.main}>
        <div className={styles.newsBlock}>
          <div className={styles.highlightArticle}>
            <div className={styles.highlightImage}>
              <Image src="/image-web-3-desktop.jpg" alt="highlight image" width={1460} height={600} sizes="100vw" style={styles.mainimg} layout="responsive" />
            </div>
            <div className={styles.highlightText}>
              <h1>The Bright Future of Web 3.0?</h1>
              <div className={styles.highlightDesc}>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className={styles.newArticles}>
            <h2>New</h2>
            <div className={styles.newArticle}>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div className={styles.newArticle}>
              <h3>The Downsides of AI Artistry</h3>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr />
            <div className={styles.newArticle}>
              <h3>Is VC Funding Drying Up?</h3>
              <p>Private funding VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
        <div className={styles.popularBlock}>
          <div className={styles.popularItem}>
            <div className={styles.popularImage}>
              <Image src="/image-retro-pcs.jpg" alt="retro pc" width={200} height={254} sizes="100vw" />
            </div>
            <div className={styles.popularText}>
              <div className={styles.popularNr}>01</div>
              <h3>Reviving Retro PCs</h3>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className={styles.popularItem}>
            <div className={styles.popularImage}>
              <Image src="/image-top-laptops.jpg" alt="top laptops" width={200} height={254} sizes="100vw"/>
            </div>
            <div className={styles.popularText}>
              <div className={styles.popularNr}>02</div>
              <h3>Top 10 Laptops of 2022</h3>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className={styles.popularItem}>
            <div className={styles.popularImage}>
              <Image src="/image-gaming-growth.jpg" alt="gaming growth" width={200} height={254} sizes="100vw"/>
            </div>
            <div className={styles.popularText}>
              <div className={styles.popularNr}>03</div>
              <h3>The growth of gaming</h3>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
