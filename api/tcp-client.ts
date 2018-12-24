import * as net from 'net'
import * as g from "./global";
export class TCPclient {

    constructor(host: string, port: number) {
        this.clientConfig(host, port)
    }

    private clientConfig(host, port) {
        let client = new net.Socket()

        client.connect({
            port: port,
            host: host
        });

        client.on('connect', function () {
            console.log('Client: connection established with server');

            var address = client.address();
            var port = address.port;
            var family = address.family;
            var ipaddr = address.address;
            console.log('Client is listening at port: ' + port);
            console.log('Client ip: ' + ipaddr);
            console.log('Client is IP4/IP6: ' + family);

            // writing data to server
            client.write('Hello from client');
        });

        client.setEncoding('utf8');

        client.on('data', function (data) {
            console.log('Data from server:' + data);
        });

        setTimeout(function () {
            client.end('\nBye bye server');
        }, 5000);
    }

}