/**
 * ------------------------
 *          BASIC
 * ------------------------
 * 1. don't show the link to them who shouldn't see it
 *   only show to the person/types of user who should see it
 * 2. Don't allow to visit the link by typing on the url
 * use adminRoute that will check whether the user is admin or not
 * If not admin then redirect to any other page. you could logout to the user
 * and send user to the login
 * --------------------------------
 *            TO SEND DATA
 * --------------------------------
 * 1. Verify jwt token (send authorization token in the header to the server).
 * If possible use axios to send jwt token by intercepting the request
 * 2. If it is an admin activity, make sure only admin user is only posting data
 */
