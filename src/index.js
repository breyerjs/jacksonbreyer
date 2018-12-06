import React from "react";
import ReactDOM from "react-dom";
import Layout from './Layout/Layout';

import styles from './index.css';


const Index = () => {
  return <div className={styles.global}>Hello React!</div>;
};

ReactDOM.render(<Layout />, document.getElementById("index"));