/**
 * 1. install stripe react stripe js
 * 2. create a checkout form with card element (card element contains: card number,
 * expiration date,cvs,zip code)
 * 3. create account on stripe and get the publishable key
 * 4. get card information
 * 5. create a payment method
 * 6. use test card for payment
 * 7. on the serverside install stripe
 * 8. create a payment intent api with payment method types :['card']
 * 9. amount should be multiple with 100
 * 10. call payment intent api to get client secret and store it in a state
 * 11. use confirmCardPayment api with client secret card info
 * 12. display confirm card error
 * 13. display confirm card success
 * 14. do things after payment-----
 * 
 */