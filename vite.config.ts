import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { handleGenerateTrapsServer } from './api/generate-traps';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'hmgs-api-middleware',
        configureServer(server) {
          server.middlewares.use('/api/generate-traps', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let rawBody = '';
            req.on('data', (chunk) => {
              rawBody += chunk;
            });

            req.on('end', async () => {
              try {
                const parsed = rawBody ? JSON.parse(rawBody) : {};
                const result = await handleGenerateTrapsServer(parsed, {
                  ...process.env,
                  ...env
                });
                res.statusCode = result.status;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result.data));
              } catch (err: unknown) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    error: 'SERVER_ERROR',
                    message: err instanceof Error ? err.message : 'Bilinmeyen sunucu hatası'
                  })
                );
              }
            });
          });
        }
      }
    ]
  };
});
