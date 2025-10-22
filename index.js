const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const adminRoutes = require('./routes/adminRoutes.js');
const contactRoutes = require('./routes/contactRoutes.js');
const newsletterRoutes = require('./routes/newsletterRoutes');

//DB Routes
const bikeRoutes = require("./routes/bikeRoutes");
const tyreRoutes = require("./routes/tyreRoutes.js");
const offerRoutes = require("./routes/offerRoutes.js");
const carousalRoutes = require("./routes/carousalRoutes.js");

//cloudinary route
const cloudinaryRoute = require("./routes/bikeUploadRoute.js");

//export route
const exportRoutes = require('./routes/exportRoute');


dotenv.config();
const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.json());

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/bikes', bikeRoutes);
app.use('/api/tyres',tyreRoutes);
app.use('/api/offers',offerRoutes);
app.use('/api/carousal',carousalRoutes);
app.use('/api', exportRoutes);
app.use('/api', cloudinaryRoute);

// DB Connection
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => console.error(err));
