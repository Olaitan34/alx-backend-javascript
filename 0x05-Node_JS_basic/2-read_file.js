// Import the 'fs' module to work with the file system
const fs = require('fs');

/**
 * Function to count the number of students in a CSV file and group them by their fields of study.
 * 
 * @param {string} fileName - The name of the CSV file to read.
 */
function countStudents(fileName) {
  // Object to store the list of students by field
  const students = {};
  
  // Object to store the count of students by field
  const fields = {};
  
  // Variable to keep track of the total number of students
  let length = 0;
  
  try {
    // Read the contents of the file synchronously (blocking)
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    
    // Split the file content by line into an array
    const lines = fileContents.toString().split('\n');
    
    // Iterate over each line in the file
    for (let i = 0; i < lines.length; i += 1) {
      // Only process non-empty lines
      if (lines[i]) {
        // Increment the total student counter
        length += 1;
        
        // Split the line into an array of values (fields)
        const field = lines[i].toString().split(',');
        
        // Add the student's name to the list for their field
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
 
