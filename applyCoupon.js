
const item={
    "name" : "Biscuits",
    "type" : "regular",
    "catergory": "food",
    "price": 200
}

function applyCoupon(item)
{
    return (discout) => {

        return item.price - ((item.price*discout)/100);
    }
}

console.log(applyCoupon(item)(10));