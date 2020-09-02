import React from 'react';
import BlogOverview from './BlogOverview'
import BlogPost from './BlogPost'
import createBlogObjects from './apicalls'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  loadBlogsinState = async () => {
    const blogsobject = await createBlogObjects();
    this.setState({
      ...this.state,
      blogs: blogsobject
    })
  }

  componentDidMount() {
    this.loadBlogsinState();
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => this.state.blogs ? <BlogOverview blogs={this.state.blogs} /> : null} />
            <Route path="/" component={() => this.state.blogs ? <BlogPost blogs={this.state.blogs} /> : null} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
