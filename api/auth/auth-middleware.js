// MW #1:
//   On FAILED registration due to `username` or `password` missing from the request body,
//     the response body should include a string exactly as follows: "username and password required".

// MW #2a: REGISTER
//   On FAILED registration due to the `username` being taken,
//     the response body should include a string exactly as follows: "username taken".

// MW #2b:  LOGIN
//   On FAILED registration due to the `username` being taken,
//     or 'password' being incorrect, the response body should include a string exactly as follows: "invalid credentials".