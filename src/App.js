import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        setLoading(false);
        setUserData(response.data.results);
        
      })
      .catch((e) => {
        console.log(e);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
      });
  },[])
  const clickHandler = () => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        
        setUserData(response.data.results);
        
      })
      .catch((e) => {
        console.log(e);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
      });
    
  };

  return (
    <div className="App">
      <h1 className="heading"> {loading ? null: 'Profile Page' }</h1>
      

      {loading ? (<h1>Loading...</h1>) : 
      (<div className="appUser">
         
          {userData.map((user, index) => {
            return (
              <Fragment key={user.cell}>
              
              <div >
              <img src={user.picture.large} alt="user_image"  />
              </div>

              <div className="cnt">
                <div className="appIcons ">
                <label>Name</label><br/>
                <input type="text" name="name" value={`${user.name.first} ${user.name.last}` } /><br/>
                <label>E-mail</label><br/>
                <input type="" name="email" value={user.email} /><br/>
                <label>Date of Birth</label><br/>
                <input type="date" name="dob" value={user.dob.date.slice(0,10)} /><br/>
                <label>Country</label><br/>
                <input type="text" name="country" value={user.location.country} /><br/>
                <label>Phone Number</label><br/>
                <input type="" name="phone" value={user.phone} /><br/>
                </div>

              </div>
               
              </Fragment>
            );
          })}
        </div>)}
     {loading ?null : <Button  clicked={clickHandler} load={loading} /> }
    </div>
  );
}

export default App;
