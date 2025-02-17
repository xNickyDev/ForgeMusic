"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const discord_player_1 = require("discord-player");
exports.default = new forgescript_1.NativeFunction({
    name: '$pauseTrack',
    version: '1.0.0',
    description: 'Pauses the current track.',
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    execute(ctx) {
        const queue = (0, discord_player_1.useQueue)(ctx.guild.id);
        return this.success(queue.node.pause());
    },
});
