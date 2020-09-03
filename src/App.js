import React, { useState, useEffect } from 'react';
import BlogOverview from './BlogOverview'
import BlogPost from './BlogPost'
import createBlogObjects from './apicalls'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  const [blogs, setBlogs] = useState("loading")


  const loadBlogsinState = async () => {
    const blogsObject = await createBlogObjects();
    setBlogs(blogsObject)
  }


  useEffect(() => {
    loadBlogsinState();
  }, [])





  return (

    < div className="App" >
      <Router>
        <Switch>
          <Route path="/" exact component={() => blogs !== 'loading' ? <BlogOverview blogs={blogs} /> : null} />
          <Route path="/" component={() => blogs ? <BlogPost blogs={blogs} /> : null} />
        </Switch>
      </Router>
    </div >
  )

}

export default App;
