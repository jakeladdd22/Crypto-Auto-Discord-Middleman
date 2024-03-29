const { User, txId } = require('../database/index');
const { ButtonBuilder, ButtonStyle, ActionRowBuilder, GatewayIntentBits, Events, Client, TextInputBuilder, ModalBuilder, TextInputStyle, PermissionsBitField, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const { discordClient, discordIds } = require('../index');
const mongoose = require('mongoose');
const fs = require('fs');

const earnChannel2 = discordClient.channels.cache.get(discordIds.mmChannel);

const colorString = '#00FF00';
const colorInt = parseInt(colorString.replace(/^#/, ''), 16);

const select = new StringSelectMenuBuilder()
			.setCustomId('selectcrypto')
			.setPlaceholder('Select a crypto currency')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('BTC')
					.setValue('btc')
                    .setEmoji('<:bitcoin:1198378338566287491>'),
				new StringSelectMenuOptionBuilder()
                    .setLabel('ETH')
                    .setValue('eth')
                    .setEmoji('<:ethereum:1198378333717672016>'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('LTC')
                    .setValue('ltc')
                    .setEmoji('<:litecoin:1198378336506892408>'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('DOGE')
                    .setValue('doge')
                    .setEmoji('<:dogecoin:1198378334950797413>'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('USDT')
                    .setValue('usdt')
                    .setEmoji('<:tether:1198378331788292286>'),
                );

const row3 = new ActionRowBuilder()
        .addComponents(select);

async function sendMMMessage() {
    earnChannel2.send({
        embeds: [
            {
                title: 'Escrow Service',
                description: `Utilize our Automated Escrow Service in order to safely handle your deals.\n\n**Accepted Cryptocurrencies:**\n- <:bitcoin:1198378338566287491> *Bitcoin (BTC)*\n- <:ethereum:1198378333717672016> *Ethereum (ETH)*\n- <:litecoin:1198378336506892408> *Litecoin (LTC)*\n- <:dogecoin:1198378334950797413> *Dogecoin (DOGE)*\n- <:tether:1198378331788292286> *Tether (USDT)*\n\n**Fees:**\n- **Deals under $50: Free**\n- **Deals over $50: $1.50**\n- **Deals over $500: 0.40%**`,
                color: colorInt,
            },
        ],
        components: [row3]
    });
}

async function editMMMessage() {
    const message = await earnChannel2.messages.fetch('1'); // Message ID sent by the bot in the respective channel

    message.edit({
        embeds: [
            {
                title: 'Escrow Service',
                description: `Utilize our Automated Escrow Service in order to safely handle your deals.\n\n**Accepted Cryptocurrencies:**\n- <:bitcoin:1198378338566287491> *Bitcoin (BTC)*\n- <:ethereum:1198378333717672016> *Ethereum (ETH)*\n- <:litecoin:1198378336506892408> *Litecoin (LTC)*\n- <:dogecoin:1198378334950797413> *Dogecoin (DOGE)*\n- <:tether:1198378331788292286> *Tether (USDT)*\n\n**Fees:**\n- **Deals under $50: Free**\n- **Deals over $50: $1.50**\n- **Deals over $500: 0.40%**`,
                color: colorInt,
            },
        ],
        components: [row3]
    });
}

sendMMMessage() // Delete this after sent first message
// editMMMessage() // Add this when sent mm message