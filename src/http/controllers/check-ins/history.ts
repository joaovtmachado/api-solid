import z from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeFetchUserCheckInsHistoryUseCase } from '@/use-cases/factories/make-fetch-user-check-ins-history-use-case'

export async function history(request: FastifyRequest, reply: FastifyReply) {
  const checkInHistoryQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
  })

  const { page } = checkInHistoryQuerySchema.parse(request.query)

  const fetchUserCheckInsHistory = makeFetchUserCheckInsHistoryUseCase()

  const { checkIns } = await fetchUserCheckInsHistory.execute({
    page,
    userId: request.user.sub,
  })

  return reply.status(201).send({
    checkIns,
  })
}
