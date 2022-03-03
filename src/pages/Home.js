import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import './Home.css'

const Home = () => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    getPosts();
  })

  return (
    <div className='homePage'>
      {postLists.map((post) => {
        return (
        <div className='post'>
          <div className='postHeader'>
            <div className='title'>
              <h1>{post.title}</h1>
            </div>
          </div>
          <div className='postTextContainer'> {post.postText} </div>
          <h5 className='authorName'>@{post.author.name}</h5>
        </div>
        )
      })

      }
    </div>
  )
}

export default Home