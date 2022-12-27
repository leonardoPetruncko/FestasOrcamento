const mongoose = require("mongoose")

async function main() {

    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://leo:123@cluster0.1riftqo.mongodb.net/?retryWrites=true&w=majority"
        );
            console.log(`Conectado ao banco!`);

    } catch (error) {
        console.log(`Error: ${error}`);
    }

}

module.exports = main