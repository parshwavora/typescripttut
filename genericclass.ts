//my learning : helps to make classes functions and variables more and more reusable for diffrent data types.
class KeyValuePair<T,U>

{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); 

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CEO", "Bill"); 
kvp2.display(); 