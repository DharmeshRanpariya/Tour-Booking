import Admin from "../models/Admin.js";

// create Admin
export const createAdmin = async (req, res) => {
    const newAdmin = new Admin(req.body);
  
    try {
      const savedAdmin = await newAdmin.save();
  
      res
        .status(200)
        .json({
          success: true,
          message: "Successfully Created",
          data: savedAdmin,
        });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: "Failed to Create . Try Again" });
    }
  };


  // login admin
export const loginAdmin = async (req, res) => {
    const email = req.body.email;
    console.log(email);
    try {
      const admin = await Admin.findOne({ email });
  
      if (!admin) {
        return res
          .status(404)
          .json({ success: false, message: "user not found" });
      }
  
      const checkCorrectPassword = await bcrypt.compare(
        req.body.password,
        admin.password
      );
  
      if (!checkCorrectPassword) {
        return res
          .status(401)
          .json({ success: false, message: "Incorrect Credentials" });
      }
  
      const { password, role, ...rest } = admin._doc;
  
      // create jwt token
      const token = jwt.sign(
        { id: admin._id, role: admin.role },
       process.env.JWT_SECRET_KEY,
        { expiresIn: "15d" }
      );
  
      //set token in the browser cookies and send the response to the client
     return res
        .cookie("accessToken", token, {
          httpOnly: true,
          expires: token.expiresIn,
        })
        .status(200)
        .json({
          token,
          data: { ...rest },
          role,
        });
    } 
    catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  };