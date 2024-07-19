"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "*",
}));
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
});
app.get("/", (req, res) => {
    res.status(200).json({
        success: false,
        message: "Api is working well",
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
            email: "ahmed@example.com",
            age: 29,
            address: {
                street: "123 Elm St",
                city: "Springfield",
                state: "IL",
                postalCode: "62701",
            },
        },
        {
            id: 2,
            name: "Muna",
            email: "muna@example.com",
            age: 34,
            address: {
                street: "456 Oak St",
                city: "Springfield",
                state: "IL",
                postalCode: "62702",
            },
        },
        {
            id: 3,
            name: "John",
            email: "john@example.com",
            age: 28,
            address: {
                street: "789 Pine St",
                city: "Shelbyville",
                state: "IL",
                postalCode: "62565",
            },
        },
        {
            id: 4,
            name: "Emma",
            email: "emma@example.com",
            age: 22,
            address: {
                street: "101 Maple St",
                city: "Springfield",
                state: "IL",
                postalCode: "62703",
            },
        },
        {
            id: 5,
            name: "Olivia",
            email: "olivia@example.com",
            age: 31,
            address: {
                street: "202 Birch St",
                city: "Chatham",
                state: "IL",
                postalCode: "62629",
            },
        },
        {
            id: 6,
            name: "Liam",
            email: "liam@example.com",
            age: 25,
            address: {
                street: "303 Cedar St",
                city: "Riverton",
                state: "IL",
                postalCode: "62561",
            },
        },
        {
            id: 7,
            name: "Sophia",
            email: "sophia@example.com",
            age: 27,
            address: {
                street: "404 Willow St",
                city: "Auburn",
                state: "IL",
                postalCode: "62615",
            },
        },
        {
            id: 8,
            name: "Noah",
            email: "noah@example.com",
            age: 33,
            address: {
                street: "505 Ash St",
                city: "Troy",
                state: "IL",
                postalCode: "62294",
            },
        },
        {
            id: 9,
            name: "Ava",
            email: "ava@example.com",
            age: 24,
            address: {
                street: "606 Walnut St",
                city: "Eureka",
                state: "IL",
                postalCode: "61530",
            },
        },
        {
            id: 10,
            name: "Mason",
            email: "mason@example.com",
            age: 32,
            address: {
                street: "707 Chestnut St",
                city: "Lincoln",
                state: "IL",
                postalCode: "62656",
            },
        },
        {
            id: 11,
            name: "Isabella",
            email: "isabella@example.com",
            age: 30,
            address: {
                street: "808 Elm St",
                city: "Pana",
                state: "IL",
                postalCode: "62078",
            },
        },
        {
            id: 12,
            name: "Ethan",
            email: "ethan@example.com",
            age: 26,
            address: {
                street: "909 Oak St",
                city: "Mount Zion",
                state: "IL",
                postalCode: "62549",
            },
        },
        {
            id: 13,
            name: "Mia",
            email: "mia@example.com",
            age: 23,
            address: {
                street: "1010 Maple St",
                city: "Decatur",
                state: "IL",
                postalCode: "62521",
            },
        },
        {
            id: 14,
            name: "James",
            email: "james@example.com",
            age: 28,
            address: {
                street: "1111 Pine St",
                city: "Urbana",
                state: "IL",
                postalCode: "61801",
            },
        },
        {
            id: 15,
            name: "Charlotte",
            email: "charlotte@example.com",
            age: 29,
            address: {
                street: "1212 Cedar St",
                city: "Champaign",
                state: "IL",
                postalCode: "61820",
            },
        },
        {
            id: 16,
            name: "Benjamin",
            email: "benjamin@example.com",
            age: 35,
            address: {
                street: "1313 Willow St",
                city: "Rantoul",
                state: "IL",
                postalCode: "61866",
            },
        },
    ];
    res.status(200).json({
        success: true,
        message: "User data retrieved successfully",
        users,
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
