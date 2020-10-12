
import Header from '../components/Header'
import styles from '../styles.module.scss'

export default function Home() {
  return (
    <div className={styles.hello}>
      <Header>Hello there</Header>
      <p>Hello World</p>
    </div>
  )
}