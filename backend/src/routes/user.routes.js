import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/user.controllers";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)

export default router;


// import protect from "../middleware/auth.middleware.js";

// router.get("/profile", protect, (req, res) => {
//   res.json({ message: "Protected route", userId: req.user });
// });
