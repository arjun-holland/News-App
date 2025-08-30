
// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default class News extends Component {

//   static defaultProps = {
//     country: 'us',
//     pageSize: 8,
//     category: 'general'
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }

//   captalizeFirstLetter = (s) => {
//     return s.charAt(0).toUpperCase() + s.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `${this.captalizeFirstLetter(this.props.category)} - NewsApp `;
//   }

// async updateNews() {
//   this.props.setProgress(0);

//   let url = `https://newsdata.io/api/1/latest?apikey=pub_12c1ea809196474199a0f5a1218fa51b&q=${this.props.category}&country=${this.props.country}&category=${this.props.category}`;
//   this.setState({ loading: true });
//   let data = await fetch(url);
//   this.props.setProgress(30);

//   let parsedData = await data.json();
//   console.log(parsedData);

//   this.props.setProgress(60);

//   this.setState({
//     articles: Array.isArray(parsedData.results) ? parsedData.results : [],
//     totalResults: parsedData.totalResults || 0,
//     loading: false,
//   });

//   this.props.setProgress(100);
// }

// fetchMoreData = async () => {
//   this.setState({ page: this.state.page + 1 });

  
//   let url = `https://newsdata.io/api/1/latest?apikey=pub_12c1ea809196474199a0f5a1218fa51b&q=${this.props.category}&country=${this.props.country}&category=${this.props.category}`;

//   let data = await fetch(url);
//   let parsedData = await data.json();

//   this.setState({
//     articles: this.state.articles.concat(
//       Array.isArray(parsedData.results) ? parsedData.results : []
//     ),
//     totalResults: parsedData.totalResults || 0,
//     loading: false,
//   });
// };


//   async componentDidMount() {
//     this.updateNews();
//   }

//   handlePreviousClick = async () => {
//     await this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   }

//   handleNextClick = async () => {
//     await this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   }

//   render() {
//     return (
//       <>
//         <div className="container my-4">
//           <h1 className='text-center' style={{ margin: '35px 0px' }}>
//             News App : Top Headlines from {this.captalizeFirstLetter(this.props.category)}
//           </h1>

//           {!this.state.loading && this.state.articles.length === 0 && (
//             <div className="text-center my-5">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">No News Available</h5>
//                   <p className="card-text">There are currently no news articles for this category.</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length < this.state.totalResults}
//             loader={<Spinner />}
//           >
//             <div className="row my-3">
//               {this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4 mb-4" key={element.article_id}>
//                     <NewsItem
//                       title={element.title ? element.title.slice(0, 40) : ""}
//                       description={element.description ? element.description.slice(0, 80) : ""}
//                       imageUrl={element.image_url}
//                       newsUrl={element.link}
//                       author={element.creator ? element.creator[0] : "Unknown"}
//                       date={element.pubDate}
//                       source={element.source_name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </InfiniteScroll>
//         </div>
//       </>
//     )
//   }
// }

//In functional componnet fashion
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]); //articles are empty first
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const captalizeFirstLetter = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  // Update document title
  useEffect(() => {
    document.title = `${captalizeFirstLetter(props.category)} - NewsApp`;
    updateNews();   // eslint-disable-next-line
  }, [props.category, props.country]);

  const updateNews = async () => {
    props.setProgress(0);
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${props.category}&country=${props.country}&category=${props.category}`;
    
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(60);

    setArticles(Array.isArray(parsedData.results) ? parsedData.results : []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);

    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${props.category}&country=${props.country}&category=${props.category}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles((prevArticles) =>
      prevArticles.concat(Array.isArray(parsedData.results) ? parsedData.results : [])
    );
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
  };

  return (
    <>
      <div className="container my-4">
        <h1 className='text-center' style={{ margin: '35px 0px' }}>
          News App : Top Headlines from {captalizeFirstLetter(props.category)}
        </h1>

        {!loading && articles.length === 0 && (
          <div className="text-center my-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">No News Available</h5>
                <p className="card-text">There are currently no news articles for this category.</p>
              </div>
            </div>
          </div>
        )}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >

          <div className="row my-3">
            {articles.map((element) => {
              return (
                <div className="col-md-4 mb-4" key={element.article_id}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={element.description ? element.description.slice(0, 80) : ""}
                    imageUrl={element.image_url}
                    newsUrl={element.link}
                    author={element.creator ? element.creator[0] : "Unknown"}
                    date={element.pubDate}
                    source={element.source_name}
                  />
                </div>
              );
            })}
          </div>

        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
