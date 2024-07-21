import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {



  return (
    <section className="App">
      <TwitterFollowCard
        username="juanchizo991201"
        name="Juan José Montenegro Pulido"
        initialIsFollowing={true}
      />

      <TwitterFollowCard
        username="midudev"
        name="Miguel Ángel Durán"
      />

    </section>
  )
}