import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyArPzKwdXg0Gg1iTN2O9WtKTwGrBmkP8Wk",
  authDomain: "ecommerce-bautista-britos.firebaseapp.com",
  projectId: "ecommerce-bautista-britos",
  storageBucket: "ecommerce-bautista-britos.appspot.com",
  messagingSenderId: "18920829930",
  appId: "1:18920829930:web:775225ef79e00d2a1eb893"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)