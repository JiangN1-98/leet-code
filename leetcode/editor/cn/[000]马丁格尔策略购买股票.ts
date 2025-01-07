const martin_stock = (stock_price: number, target_loop: number) => {
    const stockPriceArr = [{
        price: stock_price,
        stock_num: 100,
        cost: stock_price * 100,
        target_profit: stock_price * 1.1
    }]

    for (let i = 1; i < target_loop; i++) {
        const last_item = stockPriceArr[i - 1]
        const buy_num = 2 ** i * 100
        const buy_price = last_item.price * 0.9
        const total_num = last_item.stock_num + buy_num
        const total_cost = last_item.cost + buy_price * buy_num
        stockPriceArr.push({
            price: buy_price,
            stock_num: total_num,
            cost: total_cost,
            target_profit: total_cost * 1.1 / total_num
        })
    }

    return stockPriceArr
}
