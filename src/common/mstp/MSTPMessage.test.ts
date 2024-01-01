import { MSTPMessageType } from './MSTPMessageType'
import { MSTPHeaders } from './MSTPHeaders'
import { MSTPMessage } from './MSTPMessage'

test('Test MSTP message.', () => {
    const headers = new MSTPHeaders()
    headers.set('time', '1703847211')
    headers.set('username', '5511ca17-e592-4090-a170-35fc7426c470')
    headers.set('pin', '4302')

    const message = new MSTPMessage(MSTPMessageType.REQ, 'sign-in', headers, 'Nothing')
    expect(message.getHeaders().get('time')).toBe('1703847211')
})