import mongoose from "mongoose";
const todosSchema=new mongoose.Schema({
    task:{type:String}
});
export default mongoose.model.Todos||mongoose.model("Todo",todosSchema)