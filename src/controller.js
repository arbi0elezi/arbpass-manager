import server from "./server";
import rootController from "./routes/root/rootController";


server.route(rootController);

export default server;