// Import the 'readFile' function from the 'fs' module to handle file reading asynchronously
const { readFile } = require('fs');

/**
 * Function to count the number of students in a CSV file and group them by their fields of study.
 * 
 * @param {string} fileName - The name of the CSV file to read.
 * @returns {Promise} - A promise that resolves when the file has been read and the student data has been processed.
 */
function countStudents(fileName) {
  // Object to store the list of students by field
  const students = {};
  
  // Object to store the count of students by field
  const fields = {};
  
  // Variable to keep track of the total number of students
  let length = 0;

  // Return a promise that will handle the asynchronous file reading and processing
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    readFile(fileName, (error, data) => {
      if (error) {
        // If an error occurs, reject the promise with an appropriate error message
        reject(Error('Cannot load the database'));
      } else {
        // Split the file content by line into an array
        const lines = data.toString().split('\n');
        
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

        // Resolve the promise with the file data
        resolve(data);
      }
    });
  });
}

// Export the countStudents function for use in other modules
module.exports = countStudents;