import imgEmail from '../assets/email.svg';
import imgPhone from '../assets/phone.svg';
import imgLocation from '../assets/location.svg';
import "./Card.scss" 


const Card = ({users}) => {
    const {medium, title, first, last, email, phone, city, country, age, date} = users
  return (
    <div className="content">
      <div className="image">
        <img src={medium} alt="" />
      </div>
      <h3>
        <span>{title}</span> <span>{first}</span> <span>{last}</span>
      </h3>
      <div className="svg">
        <img src={imgEmail} style={{width:"20px"}} alt="email" />
      </div>
      <h4>{email}</h4>
      <div className="svg">
        <img src={imgPhone} style={{width:"20px"}} alt="phone_pic" />
      </div>
      <h4>{phone}</h4>
      <div className="svg">
        <img src={imgLocation} style={{width:"20px"}} alt="location_pic" />
      </div>
      <h4><span>{city}</span> <span>{country}</span></h4>
      <h4 className="age">Age: {age}</h4>
      <h4 className="regdate">Register Date: {date?.substr(0,10)}</h4>
    </div>
  )
}

export default Card;