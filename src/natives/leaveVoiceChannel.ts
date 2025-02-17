import { NativeFunction } from '@tryforge/forgescript'
import { useQueue } from 'discord-player'

export default new NativeFunction({
    name: '$leaveVoiceChannel',
    version: '1.0.0',
    description: 'Destroys the current voice connection.',
    unwrap: false,
    async execute(ctx) {
        const queue = useQueue(ctx.guild.id)
        if (queue) {
            await queue.connection.destroy()
        }

        return this.success()
    },
})
