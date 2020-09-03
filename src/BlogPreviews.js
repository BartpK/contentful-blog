import React from 'react';
import { Link } from 'react-router-dom';

function BlogPreviews(props) {


    const previewCards = props.blogs.map(blog => {
        return (
            <div className='blogcard' key={blog.blogTitle}>
                <div className='cardcontent'>
                    <div className='blogpreviewimagewrapper'>
                        <img className='blogpreviewimage' src={blog.blogPreview} alt={blog.blogTitle} />
                        <h3>{blog.blogTitle}</h3>
                        <p className='author'>{blog.blogAuthor}</p>
                        <p className='excerpt'>{blog.blogExcerpt}</p>
                        <Link to={`/${blog.blogSlug}`} >
                            <p>Read more...</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>BlogPreviews</h1>
            <div className="previewcontainer">
                {previewCards}
            </div>
        </div>
    );
}

export default BlogPreviews;
