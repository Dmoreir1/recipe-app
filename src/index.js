// import React from 'react';
import cors from 'cors'; 
import mongoose from 'mongoose';
import express from 'express';

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express (); 

app.use(express.json()); 
app.use(cors()); 

app.use("/auth", userRouter); 
app.use("/recipes", recipesRouter); 

mongoose.connect("mongodb+srv://dmoreira:REiXLg9RYahiMlyL@cluster3.vxq7p7m.mongodb.net/?retryWrites=true&w=majority");

app.listen(8080, () => console.log("Server Started!"));  
 







// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
  
//   {/* </React.StrictMode> */}
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

