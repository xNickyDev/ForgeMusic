import { ArgType, NativeFunction } from '@tryforge/forgescript'
import { useQueue } from 'discord-player'

export default new NativeFunction({
    name: '$stopTrack',
    version: '1.0.0',
    description: 'Forces to stop the current track.',
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        const queue = useQueue(ctx.guild.id)
        return this.success(queue.node.stop(true))
    },
})
