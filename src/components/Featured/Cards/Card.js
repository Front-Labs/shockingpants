import { CircularProgress } from '@material-ui/core'
import './card.scss'

export default function Card({ active, title, progress }) {

  return (
    <div className={`card ${active ? 'active' : ''}`}>
      <h3>{title}</h3>
      <CircularProgress
        variant="determinate"
        value={progress}
        size={100}
        thickness={3}
      />
    </div >
  )
}