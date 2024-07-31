const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mobilePattern = /^\d{10}$/;

const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

module.exports = {emailPattern, mobilePattern, passwordPattern};