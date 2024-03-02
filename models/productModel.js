const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Bitte geben sie ihre name"]
        },

        quantity:{
            type: Number,
            require: true,
            default: 5
        },
        Price: {
            type: Number,
            reuire: true,
            default: 20

        },
        image: {
            type: String,
            reuire: false,
        }
        
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);
module.exports = Product;