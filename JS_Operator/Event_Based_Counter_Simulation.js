let count = 0;

function increment() {
    function update() {
        count++;
        console.log("Count:", count);
    }
    update();
}

function decrement() {
    update();
    function update() {
        count--;
        console.log("Count:", count);
    }

}

increment();
increment();
decrement();
increment();
