// Code your solution here
function findMatching(drivers, searchDriver) {
    return drivers.filter(driver => driver.toLowerCase() === searchDriver.toLowerCase());
  }
function fuzzyMatch(drivers, searchDriver) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchDriver.toLowerCase()));
  }
  function matchName(drivers, searchDriver) {
    return drivers.filter(driver => driver.name.toLowerCase() === searchDriver.toLowerCase());
  }