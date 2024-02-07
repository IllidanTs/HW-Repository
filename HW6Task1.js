// Method 1

function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    }
}

drawTriangle(8, '*');

// Method 2

/* function drawTriangle(height, symbol) {
    let i = 1;
    while (i <= height) {
        let line = '';
        let j = 1;
        while (j <= i) {
            line += symbol;
            j++;
        }
        console.log(line);
        i++;
    }
}

drawTriangle(8, '*'); */