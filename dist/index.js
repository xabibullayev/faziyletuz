"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const categoryRouter_1 = __importDefault(require("./routes/categoryRouter"));
const postRouter_1 = __importDefault(require("./routes/postRouter"));
const imageRouter_1 = __importDefault(require("./routes/imageRouter"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use("/public", express_1.default.static("public"));
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
//connecting mongoose
let mongoUrl = process.env.MONGO_URL;
try {
    mongoose_1.default.set("strictQuery", false);
    if (!mongoUrl) {
        throw new Error("Connection string is required!");
    }
    mongoose_1.default.connect(mongoUrl);
    console.log("MongoDB connected...");
}
catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    console.log(message);
}
// routes
app.use("/auth", authRouter_1.default);
app.use("/categories", categoryRouter_1.default);
app.use("/posts", postRouter_1.default);
app.use("/images", imageRouter_1.default);
//listen specific port
app.listen(5000, () => console.log("Server is running on port http://localhost:5000..."));