let sessionStorage = {};

// Save
sessionStorage.setItem = function(key, value) {
    this[key] = value;
};

sessionStorage.getItem = function(key) {
    return this[key];
};

sessionStorage.removeItem = function(key) {
    delete this[key];
};

// Usage
sessionStorage.setItem("user", "Sherif");
console.log("Saved:", sessionStorage.getItem("user"));

sessionStorage.removeItem("user");
console.log("After removal:", sessionStorage.getItem("user"));
