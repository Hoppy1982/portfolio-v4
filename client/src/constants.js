let BASE_URL


if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3001/'
} else {
  BASE_URL = 'https://www.todo-app.markhopcraft.co.uk/'
}


module.exports = {
  BASE_URL
}
