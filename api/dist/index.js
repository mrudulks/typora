"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/notesio';
// Middleware
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true
}), (req, res, next) => {
    console.log('Incoming request URL:', req.url);
    next();
});
app.use(express_1.default.json());
// Add before routes
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'fallback_session_secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: true }
// }));
// Routes
app.use('/api', index_1.default);
// MongoDB Connection
mongoose_1.default.connect(MONGODB_URI)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
