// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(key, value) {
    driver = {key: value}
    let newDriver = Object.assign({}, driver);
    delete newDriver.key
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
    driver[key] = value
    delete driver.key
    return driver
}