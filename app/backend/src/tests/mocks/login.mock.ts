export const findOneMock = 
  {
    id: 1,
    username: "edersonlucas",
    role: "admin",
    email: "edersonlucas@outlook.com.br",
    password: "$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO"
  };

export const correctLogin = {
  email: "edersonlucas@outlook.com.br", password: "secret_user",
}

export const incorrectPasswordLogin = {
  email: "edersonlucas@outlook.com.br", password: "34324",
}

export const incorrectEmailLogin = {
  email: "teste@outlook.com.br", password: "34324",
}

export const omitPasswordLogin = {
  email: "edersonlucas@outlook.com.br", password: "",
}

export const fieldIncorrectResponse = {
  message: "Incorrect email or password"
}

export const fieldMissingResponse = {
  message: "All fields must be filled"
}

export const roleResponse = { role: "admin" }

export const correctToken = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjY2NDg1MDE4fQ.KJJSko_cbPTKSi2V8mvrKFJcken9qMGGqM346khej04' }

export const incorrectToken = { authorization: 'eysds' }

export const notFoundTokenResponse = { message: "Token not found" }

export const invalidTokenResponse = { message: "Invalid token" }