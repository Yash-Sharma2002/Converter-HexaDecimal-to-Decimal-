function dechex() {
    let num = document.getElementById("inp-1").value
    let wr = document.getElementById("hidden")

    console.log(num)

    var intArr = Array.from(String(num));
    console.log(intArr);

    var overall = ''
    for (let i = 0; i < intArr.length; i++) {

        if (intArr[i] < 10) {
            var anum = intArr[i]
        } else if (intArr[i] == 'A') {
            var anum = 10
        } else if (intArr[i] == 'B') {
            var anum = 11
        } else if (intArr[i] == 'c') {
            var anum = 12
        } else if (intArr[i] == 'D') {
            var anum = 13
        } else if (intArr[i] == 'E') {
            var anum = 14
        } else if (intArr[i] == 'F') {
            var anum = 15
        }
        console.log(anum)
        var cnum =""
        for (let i = 3; i >= 0; i--) {
            let z = Math.pow(2, i)

            if (anum - z >= 0) {
                cnum += "1"
            }
            else {
                cnum += "0"
            }
            anum = anum % z;
        }
        console.log(cnum)
        overall+=cnum

    }
    console.log(overall)

    let myFunc1 = overall => Number(overall);
    var overallArr = Array.from(String(overall), myFunc1);
    console.log(overallArr);
    var grand=0
    var srand=0
    for (let i = overallArr.length-1; i >= 0; i--) {
        let zeno = Math.pow(2, grand)
        
        if (overallArr[i]==1)
        {
            srand+=zeno
        }
        grand+=1
    }
    console.log(srand)
    wr.innerHTML = srand 
}