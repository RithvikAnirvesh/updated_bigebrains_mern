// backend-contact-form/utils/updateExcel.js
const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, '../contacts.xlsx');

const updateExcel = (formData) => {
  try {
    let workbook, worksheet;
    let retries = 3;
    let success = false;

    while (retries > 0 && !success) {
      try {
        if (fs.existsSync(filePath)) {
          // Load existing workbook
          workbook = XLSX.readFile(filePath);
          worksheet = workbook.Sheets[workbook.SheetNames[0]];
        } else {
          // Create new workbook and worksheet
          worksheet = XLSX.utils.json_to_sheet([]);
          workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
        }

        // Read existing data and append new one
        const existingData = XLSX.utils.sheet_to_json(worksheet);
        existingData.push(formData);

        const updatedSheet = XLSX.utils.json_to_sheet(existingData);
        workbook.Sheets['Contacts'] = updatedSheet;

        // Write directly to the main file
        XLSX.writeFile(workbook, filePath);
        success = true;
        console.log('Contact data saved to Excel successfully');
      } catch (error) {
        retries--;
        if (retries > 0) {
          console.log(`Error writing to Excel, retrying (${retries} attempts left)...`);
          // Wait a short time before retrying
          setTimeout(() => {}, 1000);
        } else {
          console.error('Failed to update Excel after multiple attempts:', error);
        }
      }
    }
  } catch (error) {
    console.error('Error in Excel update function:', error);
  }
};

module.exports = updateExcel;
