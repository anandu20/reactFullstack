import { Router } from "express";
import * as td from "./requesthandler.js";
const router=Router();
router.route("/gettodos").get(td.getTodos);
router.route("/addtodo").post(td.addTodo);
router.route("/deletetodo/:_id").delete(td.deleteTodo);

export default router;