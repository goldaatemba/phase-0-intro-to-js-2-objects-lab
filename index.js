// Write your solution in this file!
// Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to non-destructively update employee object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to destructively update employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to non-destructively delete a key from employee object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to destructively delete a key from employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Test cases with console.log
  console.log("Original Employee:", employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Updated Employee (Non-Destructive):", updatedEmployee);
  console.log("Employee After Non-Destructive Update:", employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Oak St");
  console.log("Employee After Destructive Update:", employee);
  
  const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee Without Name (Non-Destructive):", employeeWithoutName);
  console.log("Employee After Non-Destructive Deletion:", employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee After Destructive Deletion:", employee);
  
