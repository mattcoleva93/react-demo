import { getUserList } from "../controllers/userController";
import * as express from 'express';

const userRoutes = function (app: express.Express) {
    app.route("/githubUsers")
        .get(getUserList);
}

export default userRoutes;