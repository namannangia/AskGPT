const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://master:toor@talkpro.sw2txyu.mongodb.net/?retryWrites=true&w=majority"
);
const Cat = mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
