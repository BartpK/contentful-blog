import React from 'react';


function BlogPost(props) {

    const slug = window.location.href.split('/')[window.location.href.split('/').length - 1]

    const thisBlog = props.blogs.filter(blog => {
        return blog.blogSlug === slug;
    })

    const blogMarkup = thisBlog.map(blog => {
        return (
            <div className="blogcontainer">
                <div className="blogheaderwrapper">
                    <img className="blogheaderimage" src={blog.blogMain} alt={blog.blogTitle} />
                    <h1>{blog.blogTitle}</h1>
                    <p>By: {blog.blogAuthor}</p>
                </div>
                <div className='blogcontentwrapper'>
                    <div className='blogcontent'>
                        {blog.blogContent.map(paragraph => {
                            return (
                                <p>{paragraph}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    })

    const notFound = <h1>Sorry, couldn't find this blog</h1>

    return (
        <div className="App">
            <div>
                <a href="/">Back to overview</a>
            </div>
            {thisBlog.length > 0 ? blogMarkup : notFound}
        </div>
    );
}

export default BlogPost;
