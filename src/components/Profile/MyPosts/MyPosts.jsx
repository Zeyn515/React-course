
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={s.posts}>
      <Post message='Hi, how are you?'/>
      <Post message="It's my first post"/>
      </div>
    </div>
  )
}

export default MyPosts;