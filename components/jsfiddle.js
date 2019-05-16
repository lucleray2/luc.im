import { useEffect, useState } from 'react'
import { theme } from './theme'

const Loader = () => (
  <div className="loader">
    Loading...
    <style jsx>{`
      .loader {
        width: 100%;
        height: 170px;
        text-align: center;
        padding-top: 150px;
        border: 1px solid ${theme.light.fg};
        border-radius: 5px;
      }

      body.dark .loader {
        border: 1px solid ${theme.dark.fg};
      }
    `}</style>
  </div>
)

export default function JSFiddle(props) {
  const [dark, setDark] = useState(null)

  useEffect(() => {
    setDark(window.__darkMode)
  }, [])

  if (dark === null) return <Loader />

  return (
    <iframe
      width="100%"
      height="400"
      frameborder="0"
      src={`//jsfiddle.net/${props.id}/embedded/html,js,result/${
        dark ? 'dark/' : ''
      }`}
    />
  )
}
