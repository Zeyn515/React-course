
import s from './Like.module.css';

const Like = (props) => {

  return (
    
   
    <div>
        <span>Likes</span>

      {props.counts}
    </div>
    
    
  )
}

export default Like;