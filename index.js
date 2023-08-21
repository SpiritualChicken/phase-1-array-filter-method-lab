// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]; 


 function findMatching(drivers, name) {
    const newArr = drivers.filter((driver => driver.toLowerCase() === name.toLowerCase()));
    return newArr

 }


function fuzzyMatch(drivers, initial) {
   return drivers.filter((driver => driver.startsWith(initial))) 
}

function matchName(drivers, name) {
    return drivers.filter((driver => driver.name === name))
}

/*   
console.log(findMatching(drivers, "Bobby"))
 */

/* function findMatching(drivers, name) {
    return drivers.filter(driver =>
        driver.toLowerCase() === name.toLowerCase()
    );
} */