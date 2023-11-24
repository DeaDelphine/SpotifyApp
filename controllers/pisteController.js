const newPiste = async (req, res) => {
    try {
      const newPiste = new Piste(req.body);
      await newPiste.save();
      res.json(newPiste);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  module.exports = { newPiste };
  