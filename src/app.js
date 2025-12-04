import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials: true
}));

app.use(express.json({        // jo data json format mai ayega uski limit 16kb hi hogi
    limit: "16kb"
}));

app.use(express.urlencoded({         // jo data urlencoded format mai ayega lik aman+20 (url mai likha hota hai,  toh express ko allow kar rahe hai, to understand data from urls)
    extended: true,
    limit: "16kb"
}));

app.use(express.static("public"));

app.use(cookieParser());

export default app;