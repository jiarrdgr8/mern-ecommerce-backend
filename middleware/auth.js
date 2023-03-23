import ErrorHandler from "../utils/ErrorHandler";
import catchAsyncErrors from "./catchAsyncErrors"
import jwt from "jsonwebtoken";
import User from "../model/user";
import Shop from "../model/shop";

exports.isAuthenticated = catchAsyncErrors(async(req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
});


exports.isSeller = catchAsyncErrors(async(req,res,next) => {
    const {seller_token} = req.cookies;

    if(!seller_token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY);

    req.seller = await Shop.findById(decoded.id);

    next();
});
