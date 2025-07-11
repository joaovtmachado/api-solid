import z from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeValidateCheckInUseCase } from '@/use-cases/factories/make-validate-check-in-use-case'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const validateCheckinInsParamsSchema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = validateCheckinInsParamsSchema.parse(request.params)

  const validatecheckInsUseCase = makeValidateCheckInUseCase()

  await validatecheckInsUseCase.execute({
    checkInId,
  })

  return reply.status(204).send()
}
