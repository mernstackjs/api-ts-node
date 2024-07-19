"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
});
app.get("/", (req, res) => {
    res.status(200).json({
        success: false,
        message: "Api is working",
    });
});
app.get("/new/name", (req, res) => {
    res.status(200).json({
        name: "Ahmed Abdirizaak",
    });
});
app.get("/users", (req, res) => {
    const users = [
        {
            id: 1,
            name: "Ahmed",
        },
        {
            id: 2,
            name: "Muna",
        },
    ];
    res.status(200).json({
        success: false,
        message: "is working",
        users,
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
