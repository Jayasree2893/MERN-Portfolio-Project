const ContactSchema = require("../model/contactSchema");

const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new ContactSchema({ name, email, message });
    console.log(`ContactDb${contact}`);
    await contact.save();
    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit contact form." });
  }
};

module.exports = { contactController };
