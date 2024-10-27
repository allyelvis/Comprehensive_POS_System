const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

// Import and use routes for each module
const restaurant const retail const car_dealer const accounting const kitchen_panel const garage const inventory const report_generator const invoice_customization const app_builder const development_ideRoute = require('./routes/development_ide'/{restaurant retail car_dealer accounting kitchen_panel garage inventory report_generator invoice_customization app_builder development_ide});
app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTrestaurant app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTretail app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTcar_dealer app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTaccounting app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTkitchen_panel app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTgarage app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTinventory app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTreport_generator app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTinvoice_customization app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTapp_builder app.use(/}/$module, development_ideRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTdevelopment_ide`));
