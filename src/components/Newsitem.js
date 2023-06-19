import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2023/06/18/1600x900/NASA_APOD_June_18_1687072090868_1687072100931.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl}  target ="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
