function Point(x, y) {
    this.x = x;
    this.y = y;
}

function processPoint(point) {
    // console.log(point.x, point.y, point.a, point.b);
    let x = point;
}

function main() {
    let p1 = new Point(1, 1);
    let p2 = new Point(1, 1);
    let p3 = new Point(1, 1);
    const N = 30000000;
    p1.a = 1;
    p1.b = 1;
    p2.b = 1;
    p2.a = 1;
    p3.a = 1;
    p3.b = 1;
    let start_1 = new Date();
    for(let i = 0; i< N; i++ ) {
        if (i%4 != 0) {
            processPoint(p1);
        } else {
            processPoint(p2)
        }
    }
    let end_1 = new Date();
    let t1 = (end_1 - start_1);
    let start_2 = new Date();
    for(let i = 0; i< N; i++ ) {
        if (i%4 != 0) {
            processPoint(p1);
        } else {
            processPoint(p1)
        }
    }
    let end_2 = new Date();
    let t2 = (end_2 - start_2);
    let start_3 = new Date();
    for(let i = 0; i< N; i++ ) {
        if (i%4 != 0) {
            processPoint(p1);
        } else {
            processPoint(p3)
        }
    }
    let end_3 = new Date();
    let t3 = (end_3 - start_3);
    console.log(t1, t2, t3);
}

(function(){
    main();
})();
