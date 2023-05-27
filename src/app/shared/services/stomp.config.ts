import { RxStompConfig } from '@stomp/rx-stomp';
import SockJS from 'sockjs-client';

export const myRxStompConfig: RxStompConfig = {
  // Which server

  // Headers
  // Typical keys: login, passcode, host
  connectHeaders: {
    Authentication:
      'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiJmNTFiNTgwMC1iZTExLTQ2ZmEtYTE3ZC03ZTY3NzdmZGZhMDIiLCJleHAiOjE2ODU3OTc3NzB9.OuhV_sT4PJWUqfon6d4YcNSNzhY3VCPIAXkone0NoJAzsV1nDi9X6Z2_-VdNVMvbc_4uPpzMcbZPCpLyh0LqIg',
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 200,

  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
  webSocketFactory: function () {
    return new SockJS('http://77.232.139.121:8000/ws-stomp');
  }
};
