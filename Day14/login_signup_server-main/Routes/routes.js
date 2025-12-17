import express from 'express'

import { createItem, deleteItem, getItems, updateItem } from '../controller/controller.js';

import { registerUser, loginUser } from '../controller/authController.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


router.post("/post", createItem);
router.get("/get", getItems);
router.put("/put", updateItem);
router.delete("/delete", deleteItem);

export default router;
.0
