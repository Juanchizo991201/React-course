import { useState } from "react"

export function TwitterFollowCard({ username, name, initialIsFollowing }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const followingButtonText = isFollowing ? 'Siguiendo' : 'Seguir'
  const followingButtonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt="El avatar de juanchizo991201"
          src={`https://unavatar.io/${username}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className={followingButtonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'> {followingButtonText} </span>
          <span className='tw-followCard-stopFollow'>
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  )
}