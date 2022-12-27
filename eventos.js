import { error_default, sucesso_default } from './utils.js';


// MSG PARA CHAT
client.sendText(message.from, msg).then(sucesso_default).catch(error_default);

// MSG LINKS
client.sendLinkPreview(message.from,
    'https://www.youtube.com/watch?v=V1bFr2SWP1I',
    'Kamakawiwo ole'
)

// MSG LOCATION
client.sendLocation(message.from, '-13.6561589', '-69.7309264', 'Brasil')
    .then((result) => {
        console.log('Result: ', result); 
    }).catch((erro) => {
        console.error('Error when sending: ', erro); 
    });

// MSG SEND IMAGE
client.sendImage(message.from,
    'C:/Users/ITF-04/Downloads/download.png',
    'image-name',
    'Gay'
)