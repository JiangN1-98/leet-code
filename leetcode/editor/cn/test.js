const name = "The Window";
const object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());
