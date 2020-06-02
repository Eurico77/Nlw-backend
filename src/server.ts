import expres, { json } from "express";

const app = expres();




app.get("/users", (req, res) => {
  res.json({ Connected: true });
});

app.listen(3333);
