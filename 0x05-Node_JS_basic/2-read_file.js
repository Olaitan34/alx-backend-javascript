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
        
        // Increment the count for the student's field
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    
    // Subtract 1 to account for the header row in the CSV file
    const l = length - 1;
    
    // Log the total number of students (excluding the header)
    console.log(`Number of students: ${l}`);
    
    // Log the number of students and the list of their names for each field
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {  // Skip the header row
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    // Handle any errors that occur during file reading
    throw Error('Cannot load the database');
  }
}

// Export the countStudents function for use in other modules
module.exports = countStudents;