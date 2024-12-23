import { initTRPC } from '@trpc/server'

const missions = [
  {
    nick: 'cool-mission-1',
    name: 'Mission 1',
    description: 'mission description 1',
  },
  {
    nick: 'cool-mission-2',
    name: 'Mission 2',
    description: 'mission description 2',
  },
  {
    nick: 'cool-mission-3',
    name: 'Mission 3',
    description: 'mission description 3',
  },
  {
    nick: 'cool-mission-4',
    name: 'Mission 4',
    description: 'mission description 4',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getMissions: trpc.procedure.query(() => {
    return { missions }
  }),
})

export type TrpcRouter = typeof trpcRouter