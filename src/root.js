import routedServer from "./controller";

const start = async () => {
  try{
    await routedServer.listen(4001);
  }
  catch(err){
    routedServer.log.error(err);
    process.exit(1);
  }
};

start();