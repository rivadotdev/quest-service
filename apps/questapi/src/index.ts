import fastify from 'fastify';
import questRoutes from './routes/questRoutes';
// import fastifyPlugin from './plugins/fastifyPlugin';

const app = fastify();

// app.register(fastifyPlugin);
app.register(questRoutes);

export default app;