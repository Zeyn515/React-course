
import Like from './Likes/Like';
import s from './Post.module.css';

const Post = (props) => {

    return (
    <div className={s.item}>
      <img src='https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg' />
      
      {props.message}
      <Like counts=' 20'/>
    </div>
  )
}

export default Post;