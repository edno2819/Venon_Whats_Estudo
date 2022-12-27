import { create, Whatsapp } from 'venom-bot';
import { text_format, error_default, sucesso_default } from './utils.js';
import configs from './configs.js';
import template from './templatesMsg.js';


function print_menssage(message) {
    let text = message.isGroupMsg ? `Gropo ${message.name} - Membro ${message.sender.pushname}` : `Contato ${message.notifyName}`
    console.log(`${text} : ${message.body}`)
}

function response_private(client, message) {
    if (text_format(message.body) == 'hid' && message.from.includes(configs.users)) {
        let msg = 'Olá! Sou o novo chat bot do Edno.'
        client.sendText(message.from, msg).then(sucesso_default).catch(error_default);
    }
}


function bot1(client) {
    client.onMessage((message) => {
        if (message.isGroupMsg === false) {
            let msg = 'Olá! Sou um chatbot. Ele foi almoçar, assim que voltar responderá sua menssagem.'
            client.sendText(message.from, msg).then(sucesso_default).catch(error_default);
        }
    })
};

function bot2(client) {
    client.onAnyMessage((message) => {
        if (text_format(message.body) == 'iniciar' && message.from.includes(configs.users)) {
            client.sendText(message.from, template.bot2.opcao1).then(sucesso_default).catch(error_default);
        }
        if (text_format(message.body) == '1' && message.from.includes(configs.users)) {
            client.sendText(message.from, 'Digite o numero do contato: ').then(sucesso_default).catch(error_default);
        }
        if (text_format(message.body) == '2' && message.from.includes(configs.users)) {
            client.sendText(message.from, 'Bot parado').then(sucesso_default).catch(error_default);
        }
    })
};


create({ session: 'primeira', multidevice: true })
    .then(async (client) => {
        bot1(client)
        bot2(client)
    })
    .catch((erro) => { console.log(erro) });