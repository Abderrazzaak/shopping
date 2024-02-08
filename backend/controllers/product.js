const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
    if (
      req.body.name !== "" &&
      req.body.description !== "" &&
      req.body.price !== "" 
    ) {
        Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      })
      .then(() => {
        res.send("New Message inserted Succefully");
      })
      .catch((err) => {
        res.json({ error: err });
      });
    } else {
      return res.status(400).json({
        erreur: "fill all the fields",
      });
    }
  };


exports.getProduct = (req, res) => {
  const id = req.params.id;
  Product.findById(id, { include: Product })
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Message with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Message with id=" + id,
      });
    });
};


exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    if (
      req.body.name !== "" &&
      req.body.description !== "" &&
      req.body.price !== "" 
    ) {
      try {
        const updatedProduct = await Product.findOneAndUpdate(
          { _id: id }, // Assuming _id is the unique identifier for the product
          {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
          }
          ,
          { new: true } // Return the updated document
        )
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Message not found' });
        }
        
        return res.status(200).json(updatedProduct);
        // Handle the updated message as needed
      } catch (error) {
        console.error('Error updating message:', error);
        return res.status(500).json({ message: 'Error updating message', error: error });

      }
    } else {
      return res.status(400).json({
        erreur: "Fill all the fields",
      });
    }
  };


exports.showAllProduct = async (req, res) => {
    try {
        const allProduct = await Product.find()
        return res.status(200).json(allProduct);
        // Handle the retrieved messages as needed
    } catch (error) {
        console.error('Error getting messages:', error);
        return res.status(500).json({ message: 'Error retrieving messages', error: error });
    }
};


exports.dealOfProduct = (req, res) => {
    // Assuming your Message model has a field named "_id"
    Product.findByIdAndDelete(req.params.id)
      .then((deletedProduct) => {
        if (!deletedProduct) {
          return res.status(404).send('Message not found');
        }
        res.send('Message Removed Successfully');
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      });
  };