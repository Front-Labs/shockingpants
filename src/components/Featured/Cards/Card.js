import { CircularProgress } from '@material-ui/core'
import './card.css'

export default function Card({ active, title, progress }) {

  return (
    <div className={`card ${active ? 'active' : ''}`}>
      <h3>{title}</h3>
      <CircularProgress
        variant="determinate"
        value={progress}
        color="secondary"
      />
    </div >
  )
}