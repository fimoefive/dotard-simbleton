import { useBusinesses } from './BusinessProvider.js'
import { BusinessList } from './BusinessList.js'

// Create and test 5 people at the testing facility
// const doug = testPerson("Doug", 31, 98);

// Diagnose each person at the clinic
// const dougDiagnoses = diagnose(doug, 2);


// Invoke the component function that returns the HTML string of business and add it to the DOM
const contentTarget = document.querySelector(".business");
contentTarget.innerHTML = BusinessList(); 

 const allOfBusinesses = useBusinesses();
 for (const business of allOfBusinesses) {
     console.log(business)
};
useBusinesses();
BusinessList();