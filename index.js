const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

const index = context => {
  context.body = "Do Zero ao Deploy"
}

const hello = context => {
  const name = context.params.name || "world"
  context.body = `Hello ${name}`
}

router.get('/', index);
router.get('/hello', hello);
router.get('/hello/:name', hello);

app.use(router.routes());

const port = process.env.PORT;

app.listen(port)
  .on('listening', () => console.log(`Listening on port ${port}`))