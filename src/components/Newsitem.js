import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    
    return (
      <div className="row row-cols-1 row-cols-md-1 g-6">
      <div className='col'>
            <div className="card" style={{maxHeight:'450px',minHeight:'450px'}}>
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:'82%',zIndex:'1'}}>
        {source} </span>
      <div style={{maxHeight:'360px'}}>
        <img src={imageUrl?imageUrl:"https://1847884116.rsc.cdn77.org/tamil/news/naanready220623_6-249.jpg"} className="card-img-top" alt="..."/>
      </div>
            <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'> By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer'  href={newsUrl}  target ="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
      </div>
 // <div className="row row-cols-1 row-cols-md-1 g-6">
            //   <div className="card-group">
            //     <div className="card">
            //       <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{ left: '80%', zIndex: '1' }}>
            //         {source} </span>
            //       <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/tech/img/2023/06/18/1600x900/NASA_APOD_June_18_1687072090868_1687072100931.jpg"} className="card-img-top" alt="..." />
            //       <div className="card-body">
            //         <h5 className="card-title">{title}</h5>
            //         <p className="card-text">{description ? description : "Nothing in description here"}...</p>
            //       </div>
            //       <div className="card-footer">
            //         <small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small>
            //         <p><a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a></p>
            //       </div>
            //     </div>
            //   </div>
            // </div>



    )
  }
}

export default Newsitem
