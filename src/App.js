import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';



function App() {
  const [users, setUsers] = useState({})
  const url = 'https://randomuser.me/api/'
  
  const apiUsers = async () => {
    try {
      const {data} = await axios.get(url)
      const {picture, name, email, phone, location, dob, registered} = data.results[0]
      const {medium} = picture
      const {title, first, last} = name
      const {city, country} = location
      const {age} = dob
      const {date} = registered
      setUsers({medium: medium, title: title, first: first, last: last, email: email, phone: phone, city: city, country: country, age: age, date: date})
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    apiUsers()
  }, [])


  function randomBtn () {
    apiUsers()
  }

  return (
    <>
    <div className="container_div">
      <Card users={users}/>
    </div>
    <button onClick={() => randomBtn()}>Random</button>
    </>
   
  );
}

export default App;
