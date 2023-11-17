const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// Need Session ID
const sessionID = async function () {

    const product = await stripe.products.create({
        name: '',
        description: '',
        image: ''
    });

    const price = await stripe.prices.create({
        price: '',
        quantity: ''
    });

    const session = await stripe.checkout.sessions.create({
        success_url: '',
        return_url: '',
        line_items: [{}],
        mode: 'payment',
    });
};
