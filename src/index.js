import dotenv from "dotenv"

// Load environment variables first
dotenv.config({ path: "./.env" })

import connectDB from "./db/index.js"

// Now connect to the database
connectDB()
.then(() => {
    app.on("error", (error) =>{
        console.log("ERROR OCCURED ", error )
        throw error;
    })
}) 
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running on port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("mongo failed to connect" , err)
})
