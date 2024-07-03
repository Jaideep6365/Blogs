import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner'; // Make sure to import Spinner

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[650px] mt-[60px]
    mb-[60px] flex flex-col justify-center items-center'>
      {
        loading ? 
        (<Spinner />) :
        (
          posts.length === 0 ? 
          (<div>
            <p>No Posts Found</p>
          </div>) :
          (posts.map((post, index) => (
            <div key={index}>
                <p className='font-bold text-[25px] mt-4'>{post.title}</p>  
                <p className='text-[15px]'>
                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                </p> 
                <p className='text-[12px]'>Posted on {post.date}</p>
                <p className='text-[16px] mt-[10px]'>{post.content}</p> 
                <div className='flex gap-x-3'>
                    {post.tags.map((tag, tagIndex) => {
                        return <span key={tagIndex}className='text-blue-500 underline font-bold text-[12px]'>{`#${tag}`}</span>;
                    })}
                </div>
            </div>
          )))
        )
      }
    </div>
  );
}

export default Blogs;
