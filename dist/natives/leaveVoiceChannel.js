"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const discord_player_1 = require("discord-player");
exports.default = new forgescript_1.NativeFunction({
    name: '$leaveVoiceChannel',
    version: '1.0.0',
    description: 'Destroys the current voice connection.',
    unwrap: false,
    async execute(ctx) {
        const queue = (0, discord_player_1.useQueue)(ctx.guild.id);
        if (queue) {
            await queue.connection.destroy();
        }
        return this.success();
    },
});
