import React from 'react';

import BlogPreviews from './BlogPreviews';

function BlogOverview(props) {
    return (
        <div className="App">

            <BlogPreviews blogs={props.blogs} />
        </div>
    );
}

export default BlogOverview;
