// import 'dotenv/config';
// import fs from 'fs';
// import path from 'path';
// import dbConnection from "../config/dbConnection.js";
// import Property from "../models/Property.js";

// const importData = async () => { 
//     await dbConnection(); 
//     try {
//         const filename = path.join(process.cwd(), 'data', 'properties2.json');
//         const jsonData = JSON.parse(fs.readFileSync(filename, 'utf-8'));

//         await Property.insertMany(jsonData); 
//         console.log("✅ Data imported successfully!"); 
//         process.exit(); 
//     } catch (error) { 
//         console.error("❌ Error importing data:", error); 
//         process.exit(1); 
//     } 
// }; 
// importData();