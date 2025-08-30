// import React, { Component } from 'react'

// export default class NewsItem extends Component {
//   render() {
//     const {title,description,imageUrl,newsUrl,author,date,source} = this.props;
//     return (
//       <div>
//         <div className="card" style={{width: "18rem"}}>
//           <img
//             src={
//               imageUrl
//                 ? imageUrl
//                 : "https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2F69%2F80%2Fce45989b44d587d2c560fcf95c6e%2Fcracker-barrel-81318.jpg"
//             }
//             className="card-img-top"
//             alt="news"

            
//           />
          
          
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//           <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//               {source}
//             <span class="visually-hidden">message</span>
//           </span>
//             <p className="card-text">{description}...</p>
            
//             <p className="card-text">
//               <small className="text-muted">
//                 By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a href={newsUrl} rel="noopener" target='_blank' className="btn btn-primary">Read More</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }



import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2F69%2F80%2Fce45989b44d587d2c560fcf95c6e%2Fcracker-barrel-81318.jpg"
          }
          className="card-img-top"
          alt="news"
        />

        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">message</span>
          </span>

          <p className="card-text">{description}...</p>

          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={newsUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
