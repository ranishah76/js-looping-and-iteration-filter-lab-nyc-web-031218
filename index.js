// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (dname) {
    return dname.toLowerCase() == name.toLowerCase();
  })
}

function fuzzyMatch(array, string) {
  return array.filter(function (name) {
    return name[0].toLowerCase() === string[0].toLowerCase();
  })
}

function matchName (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase()
  })
}
