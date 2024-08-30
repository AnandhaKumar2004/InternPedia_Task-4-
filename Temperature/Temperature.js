function onConvetor() {
    let a = document.getElementById("fromBox").value;
    let b = document.getElementById("toBox").value;
    let c = document.getElementById("tempBox").value;

    if (a != b) {
        if (a == "celsius") {
            let f = (c * 9 / 5) + 32;
            document.getElementById("result").textContent = f;
            console.log(f);
        } else {
            let f = (32 - c) * 5 / 9;
            document.getElementById("result").textContent = f;
            console.log(f);
        }
    } else {
        console.log("Enter a different unit");
    }
}