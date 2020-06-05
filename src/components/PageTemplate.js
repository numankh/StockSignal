import React, {Component} from 'react';
import FeedItem from '../components/FeedItem';
import Grid from '@material-ui/core/Grid';


class PageTemplate extends Component {

  state = {
    articles: [],
    endDate : new Date().toDateString(),
    startDate : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toDateString()
  };

  componentDidMount() {
    fetch(this.props.endpoint)
    .then(res => res.json())  //parses output to JSON
    .then((data) => {
      this.setState({ articles: data })
      console.log(this.state.articles)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
          <h1>{this.props.pageTitle}</h1>
          <h2>Articles from {this.state.startDate} - {this.state.endDate}</h2>

          <Grid container spacing={3}>
            {this.state.articles.map((article) => (
              <Grid item xs={4}>
                <FeedItem 
                  title={article.title} 
                  description={article.description} 
                  url={article.url}
                  image={article.urlToImage}
                />
              </Grid>
            ))}
          </Grid>
       </div>
    );
  }
}

export default PageTemplate;
