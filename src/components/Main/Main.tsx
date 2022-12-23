import { Children, useEffect, useState } from "react";
import styles from "./Main.module.css";
import Header from "../Header/Header";
import MarkdowView from 'react-showdown';
import axios from 'axios';
import Breadcrumb from "../Breacrumb/Breadcrumb";
import { createRoutesFromChildren, Outlet } from "react-router-dom";

function Main(props:any) {
  
    return (
      <main className={`${styles.main}`}>
            {props.children}
      </main>
    )
}
  
export default Main;
  