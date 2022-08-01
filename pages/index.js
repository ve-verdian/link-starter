import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Link Akses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Selamat Datang" />
        <p className="description">
          Silahkan gunakan akses link berikut dengan bijak <code>Terimakasih</code>
        </p>
        <div className={styles.grid}>
          <a href="http://175.106.8.138:9099" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>Teramedik &rarr;</h2>
            <p>Hospital Information System, Rumah Sakit Ibu & Anak Family</p>
          </a>

          <a href="http://175.106.8.138:9393/" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>RSCLOUD &rarr;</h2>
            <p>Rumah yang aman untuk semua data Anda, alangkah baiknya di simpan di Cloud</p>
          </a>

          <a href="http://175.106.8.138:9292/" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>Sismadak &rarr;</h2>
            <p>Mengumpulkan, menyimpan, dan mencari dokumen Akreditasi</p>
          </a>

          <a href="http://lims.rsiafamily.com:9494/flims/index.php?p=show_detail&id=25/" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>Formulir IT SIMRS &rarr;</h2>
            <p>
              Pengajuan akses user baik itu Teramedik, RSCLOUD, Sismadak, ataupun Email
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
