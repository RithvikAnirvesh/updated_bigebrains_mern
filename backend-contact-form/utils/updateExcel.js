// backend-contact-form/utils/updateExcel.js
const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, '../contacts.xlsx');

const updateExcel = (formData) => {
  let workbook, worksheet;

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

  XLSX.writeFile(workbook, filePath);
};

module.exports = updateExcel;
