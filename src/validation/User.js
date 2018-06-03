module.exports = class User {
    /**
     * @param username
     * @returns {Boolean}
     */
    static validateUsername(username) {
        const regex = /^[a-zA-Z0-9._]{3,30}$/;
        return regex.test(username);
    }
}
