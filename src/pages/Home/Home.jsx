import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";
const Home = () => {

    const signInLinksStyle={
        color:"#0077ff",
        fontWeight:"bold",
        textDecoration:"none",
        marginLeft:"10px"
    }

    const history=useHistory();

  function startRegist(){
      history.push("/register");
        // console.log("Button clicked");
    }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
         <Button onClick={startRegist} text="Get Your Username"/>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text ?</span>
          <Link style={signInLinksStyle} to="/login"> Sign In</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
