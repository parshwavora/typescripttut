//my learning : helps to make classes functions and variables more and more reusable for diffrent data types.
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key = " + this.key + ", val = " + this.val);
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "Steve");
kvp1.display();
var kvp2 = new KeyValuePair();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display();
