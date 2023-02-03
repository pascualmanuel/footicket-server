const app = require("./app");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

const app = express();

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://footicket.onrender.com/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
