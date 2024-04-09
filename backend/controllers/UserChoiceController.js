import UserChoice from "../models/UserChoice.js";

// create user choice

export const createUserChoice = async (req, res) => {
    const newUserChoice = new UserChoice(req.body);
    try{
        const saveUserChoice = await newUserChoice.save();

        res.status(200).json({
            success: true,
            message: "Your Choice Uploaded",
            data: saveUserChoice,
        });
    } catch (err) {
        res.status(500).json({ success: true, message: "internal server error" });
    }
};

// get all userchoice
export const getAllUserChoice = async(req , res)=>{
    
    try {
        const choice = await UserChoice.find()
        res.status(200).json({
            success: true,
            message: "successful",
            data: choice,
          });
    } catch (error) {
        res.status(500).json({ success: true, message: " internal server error" });
    }
}

//delete userchoice
export const deleteChoice = async (req, res) => {
    const id = req.params.id;
    try {
      await UserChoice.findByIdAndDelete(id);
  
      res.status(200).json({
        success: true,
        message: "Successfully deleted",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "failed to delete",
      });
    }
  };
