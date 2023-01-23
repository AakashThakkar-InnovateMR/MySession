const addToCart = (products) => {
    console.log('Adding ' + products + ' to Cart...');

    return products;
};

const proceedToPayment = cart => {
    console.log('Proceeding to Payment for this cart'+ cart + '.......');
    return cart;
};

// setTimeout(() => {
//     console.log('Proceeding to Payment for this cart'+ cart + '.......');
//     return cart;
// }, 2000);

const confirmingOrder = paymentDetails => {
    console.log('Confirming order with this payment details: '+ paymentDetails);
    return paymentDetails;
};

const showOrderSummary = orderDetails => {
    console.log('Order Summary: ', orderDetails);
};

const products = ['iPhone 14 Sigma Ultra Pro Max Skoda Lasan...', '20w charger', 'Back Cover'];

// const cart = addToCart(products);
// const paymentDetails = proceedToPayment(cart);
// const orderDetails = confirmingOrder(paymentDetails);
// showOrderSummary(orderDetails);

// First thing our execution order get manipulated....
// and because of that the whole fucking things get affected...

const addToCartC = (products, callback) => {
    console.log('Adding ' + products + ' to Cart...');

    return callback(products);
};

const proceedToPaymentC = (cart, callback) => {
    // console.log('Proceeding to Payment for this cart'+ cart + '.......');
    // return callback(cart);
};
//
// setTimeout(() => {
//     console.log('Proceeding to Payment for this cart'+ cart + '.......');
//     return callback(cart);
// }, 2000);

// setTimeout(() => {
//     console.log('Proceeding to Payment for this cart'+ cart + '.......');
//     throw new Error('Failing Because of Error......');
//     return callback(cart);
// }, 2000);

const confirmingOrderC = (paymentDetails, callback) => {
    console.log('Confirming order with this payment details: '+ paymentDetails);
    return callback(paymentDetails);
};

const showOrderSummaryC = (orderDetails) => {
    console.log('Order Summary: ', orderDetails);
};

// addToCartC(products, (cart) => {
//     proceedToPaymentC(cart, (paymentDetails) => {
//         confirmingOrderC(paymentDetails, (orderDetails) => {
//             showOrderSummaryC(orderDetails);
//         });
//     });
// });

// What if our any of the callback get fails than how we will handle them..
// what about all the other callback and flow who are not going to execute because of this failure...

// Many people in life also goes like this only.......

const addToCartPromise = (products) => {
    const promise = new Promise((resolve, reject) => {
        if (products && products.length) {
            console.log('Adding ' + products + ' to Cart...');
            resolve(products);
        }

        reject(new Error('Error while creating cart....'));
    });

    return promise;
};

const proceedToPaymentPromise = cart => {
    return new Promise((resolve, reject) => {
        if (cart && cart.length) {
            console.log('Proceeding to Payment for this cart'+ cart + '.......');
            resolve(cart);
        }

        reject(cart);
    });
};

const confirmingOrderPromise = paymentDetails => {
    return new Promise((resolve, reject) => {
        if (paymentDetails && paymentDetails.length) {
            console.log('Confirming order with this payment details: '+ paymentDetails);
            resolve(paymentDetails);
        }

        reject(new Error('Error while cofirming orders.......'));
    });
};

const showOrderSummaryPromise = orderDetails => {
    return new Promise((resolve, reject) => {
        if (orderDetails && orderDetails.length) {
            console.log('Order Summary: ', orderDetails);

            resolve(orderDetails);
        }

        reject(new Error('Error while showig order Summary....'));
    });
};

// addToCartPromise([])
// .then((cartDetails) => {
//     proceedToPaymentPromise(cartDetails)
// })

// then inline chaining...

// addToCartPromise([])
// .then((cartDetails) => {
//     return proceedToPaymentPromise(cartDetails);
// })
// .then((paymentDetails) => {
//     return confirmingOrderPromise(paymentDetails);
// })
// .then((orderDetails) => {
//     return showOrderSummaryPromise(orderDetails);
// })
// .then((result) => {
//     console.log('Final Result: ', result);
// })

// Till Here, we are on still same page...


// addToCartPromise([])
// .then((cartDetails) => {
//     return proceedToPaymentPromise(cartDetails);
// })
// .then((paymentDetails) => {
//     return confirmingOrderPromise(paymentDetails);
// })
// .then((orderDetails) => {
//     return showOrderSummaryPromise(orderDetails);
// })
// .then((result) => {
//     console.log('Final Result: ', result);
// })
// .catch((error) => {
//     console.log(error);
// });

// Solved the first problem, error handling....


addToCartPromise(products)
.then((cartDetails) => {
    return proceedToPaymentPromise(cartDetails);
})
.catch((cartFailure) => {
    console.log(cartFailure);
})
.then((paymentDetails = ['iPhone 14 Sigma Ultra Pro Max Skoda Lasan...', '20w charger', 'Back Cover']) => {
    return confirmingOrderPromise(paymentDetails);
})
.then((orderDetails) => {
    return showOrderSummaryPromise(orderDetails);
})
.then((result) => {
    console.log('Final Result: ', result);
});

// ------------

addToCartPromise(products)
.then((cartDetails) => {
    return proceedToPaymentPromise(cartDetails);
})
.catch((cartFailure) => {
    console.log(cartFailure);
})
.then((paymentDetails = ['iPhone 14 Sigma Ultra Pro Max Skoda Lasan...', '20w charger', 'Back Cover']) => {
    return confirmingOrderPromise(paymentDetails);
})
.then((orderDetails) => {
    return showOrderSummaryPromise(orderDetails);
})
.catch((orderError) => {
    console.log(orderError);
})
.then((result) => {
    console.log('Final Result: ', result);
});
