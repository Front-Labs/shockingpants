import { CircularProgress } from '@material-ui/core'
import './card.css'

const Card = (props) => {
  return (
    <div className={`card ${props.active ? 'active' : ''}`}>
      <h3>{props.title}</h3>
      <CircularProgress
        variant="indeterminate" 
        // value="75"
        color="white"
      />
    </div >
  )
}
export default Card