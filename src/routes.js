import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (get, res) => res.json({ ok: true }));

export default routes;
