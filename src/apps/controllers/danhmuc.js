const CategoryModel = require("../models/category");
const ProductsModel = require("../models/product");
const paginate = require("../../common/paginate");
const authController = require("../controllers/auth");
const fs = require("fs");
const path = require("path");
const slug = require("slug");
const iPhone = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b6295c"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/iPhone", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const iPhoneIncrease = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b6295c"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    products.sort(function(pd1,pd2){
        return pd1.price - pd2.price;
    })
    res.render("admin/danhmuc/iPhone", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const iPhoneReduce = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b6295c"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    products.sort(function(pd1,pd2){
        return pd2.price - pd1.price;
    })
    res.render("admin/danhmuc/iPhone", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}

const Samsung = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b6295d"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/Samsung", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const SamsungIncrease = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b6295d"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    products.sort(function(pd1,pd2){
        return pd1.price - pd2.price;
    })
    res.render("admin/danhmuc/Samsung", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const SamsungReduce = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b6295d"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    products.sort(function(pd1,pd2){
        return pd2.price - pd1.price;
    })
    res.render("admin/danhmuc/Samsung", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const HTC = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b6295e"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/HTC", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const Nokia = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b6295f"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/Nokia", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const Sony = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b62960"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/Sony", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const Blackberry = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b62961"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/Blackberry", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const Xiaomi = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b62962"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/Xiaomi", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const Huawei = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b62963"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/Huawei", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const OPPO = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b62964"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/OPPO", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}
const Vivo = async (req,res) =>{
    //const productss = await ProductsModel.find().populate({path:"cat_id"});
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = page*limit - limit;

    const total = await ProductsModel.find().countDocuments();
    const totalPage = Math.ceil(total/limit);
    const categories = await CategoryModel.find();
    const products = await ProductsModel.find({cat_id:"5f8a0b89dd21e25249b62965"}).populate({path:"cat_id"}).skip(skip).limit(limit);
    res.render("admin/danhmuc/Vivo", 
    {
        products: products, 
        pages: paginate(page, totalPage),
        page:page,
        totalPage:totalPage,
        nameRender:authController.full_name,
        categories:categories,
    });
}

module.exports = {
    iPhone:iPhone,
    iPhoneIncrease:iPhoneIncrease,
    iPhoneReduce:iPhoneReduce,
    Samsung:Samsung,
    SamsungIncrease:SamsungIncrease,
    SamsungReduce:SamsungReduce,
    HTC:HTC,
    Nokia:Nokia,
    Sony:Sony,
    Blackberry:Blackberry,
    Huawei:Huawei,
    OPPO:OPPO,
    Vivo:Vivo,
    Xiaomi:Xiaomi,
    
}