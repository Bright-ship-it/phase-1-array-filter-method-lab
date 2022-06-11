function findMatching(drivers, name) {
    const taxiDriver = drivers.filter(
        (match) => match.toLowerCase() === name.toLowerCase());
    return taxiDriver;
}
function fuzzyMatch(drivers, name) {
    const taxiDriver = drivers.filter(
        (match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
    return taxiDriver;
}
function matchName(driver, name) {
    const taxiDriver = driver.filter(
        (match) => match.name === name
    )
    return taxiDriver;

}
