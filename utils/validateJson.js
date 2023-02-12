/**
 * Checks if the given string is a valid JSON string.
 * @param {string} str - a string representation of the object
 * @returns {boolean}
 */
export const validateJSONString = (str)=> {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/**
 * Checks if the given string is either undefined, null or empty string.
 * @param {string} field - the string to validate
 * @returns {boolean}
 */
export const validateField = (field)=> {
    return typeof(field) !== 'undefined' && field !== '' && field !== null;
}