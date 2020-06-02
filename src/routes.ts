import exprpess from "express";

const routes = exprpess.Router();

routes.get("/users", (req, res) => {
  return res.json({ Connected: true });
});


export default routes;
