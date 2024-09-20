import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//Placing order using COD method
const placeOrder = async (req,res) => {
    try{
        const {userId, items, amount, address} = req.body;

        const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success: true, message:"Order Placed"})
    }catch(error){
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

//Placing order using stripe method
const placeOrderStripe = async (req,res) => {

}

//Placing order using razorpay method
const placeOrderRazorpay = async (req,res) => {
    
}


//All Orders data for Admin Method
const allOrders = async (req,res) => {
    try{
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//User Order Data for frontend
const userOrders = async (req,res) => {

    try{

        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success: true, orders})

    }catch(error){
        console.log(error)
        res.json({success:false, message: error.message})
    }
    
}

//update order status from admin panel
const updateStatus = async (req,res) => {
    try{
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:'Status Updated'})
    }catch(error){
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

// Total amount of products sold
const totalSales = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        let totalAmount = 0;
        let productSales = {};

        orders.forEach(order => {
            totalAmount += order.amount;

            order.items.forEach(item => {
                if (!productSales[item.name]) {
                    productSales[item.name] = { quantity: item.quantity, sales: item.quantity * item.price };
                } else {
                    productSales[item.name].quantity += item.quantity;
                    productSales[item.name].sales += item.quantity * item.price;
                }
            });
        });

        const sortedProductSales = Object.entries(productSales).sort((a, b) => b[1].quantity - a[1].quantity);

        res.json({
            success: true,
            totalAmount,
            topProducts: sortedProductSales.slice(0, 5) // Top 5 products
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, totalSales}