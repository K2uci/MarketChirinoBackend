const app = require('./src/app')

// const PORT = process.env.PORT || 3001;
const PORT = 3001; 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

