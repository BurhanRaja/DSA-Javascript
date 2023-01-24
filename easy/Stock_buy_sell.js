let price = [100,180,260,310,40,535,695];

function stockBuySell1(array, n) {
    if (n === 1) {
        return;
    }

    let i = 0;
    while (i < n - 1) {

        while (i <= n - 1 && array[i+1] <= array[i]) {
            i++;
        }

        if (i === n - 1) {
            return;
        }

        let buy = i++;

        while (i < n && array[i+1] >= array[i]) {
            i++;
        }

        let sell = i;

        console.log([buy, sell]);
    }
}

stockBuySell1(price, price.length);
