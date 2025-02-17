import { Arg, ArgType, NativeFunction } from '@tryforge/forgescript'
import { useQueue } from 'discord-player'

export default new NativeFunction({
    name: '$removeTrack',
    version: '1.0.0',
    description: 'Removes the track that is located at the given position.',
    brackets: true,
    unwrap: true,
    args: [Arg.requiredNumber('Position', 'The track position to be removed.')],
    output: ArgType.Boolean,
    execute(ctx, [position]) {
        const queue = useQueue(ctx.guild.id)
        return this.success(!!queue.node.remove(position))
    },
})
