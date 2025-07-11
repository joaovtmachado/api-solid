import 'dotenv/config'
import { z } from 'zod'
// process.env: { NODE_ENV }

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  // derruba a aplicacao
  throw new Error('Invalid environment variables')
}

// vai trazer os dados das variaveis ambiente
export const env = _env.data
