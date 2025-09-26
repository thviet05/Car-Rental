import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express App
const app = express()

// Connect Database
await connectDB()

// Middleware
app.use(cors());
app.use(express.json());


// Đây là danh sách các địa điểm bạn muốn hiển thị.
const locationList = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Nha Trang', 'Phú Quốc'];

// Tạo một API endpoint mới để frontend có thể gọi và lấy danh sách này
app.get('/api/locations', (req, res) => {
  // Trả về danh sách dưới dạng JSON
  res.status(200).json(locationList);
});

// --- KẾT THÚC THÊM CODE MỚI ---


app.get('/', (req, res)=> res.send("Server is running"))
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))