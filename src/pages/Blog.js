import React, {useState,useEffect} from 'react';
import "./blog.css"
import BlogCard from '../components/BlogCard';

const Blog = () => {

    const [blogs,setBlogs]=useState();


    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("http://localhost:3000/data/blogData.json");
          const data = await res.json();
          setBlogs(data);
        };
        fetchData();
      }, []);
    


  return (
    <section id="blogs" className='blogs'>
        <div className='container-fluid'>
            <div className='row'>
                <h4 className='section-title'>Blog Title</h4>
            </div>
            <div className='row mt-5'>

                {
                    blogs&&blogs.length>0&& blogs.map((blog)=>(

                        <BlogCard key={blog._id} blog={blog}/>

                    ))
                }

            </div>
        </div>
        
    </section>
  )
}

export default Blog