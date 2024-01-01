import { MSTPHeaders } from './MSTPHeaders'
import { MSTPMessageType } from './MSTPMessageType'

/**
 * MSTP message.
 * @author James Chan
 */
export class MSTPMessage {
    /**
     * Mapping from MSTP message type strings to enum values.
     * @private
     */
    private static readonly MSTPMessageTypeStringMap: Record<string, MSTPMessageType> = {
        'REQ': MSTPMessageType.REQ,
        'RES': MSTPMessageType.RES,
        'ACK': MSTPMessageType.ACK,
    }

    /**
     *
     * @private
     */
    private static readonly MSTPMessageTypeMap: Record<MSTPMessageType, string> = {
        [MSTPMessageType.REQ]: 'REQ',
        [MSTPMessageType.RES]: 'RES',
        [MSTPMessageType.ACK]: 'ACK',
    }

    /**
     * Creates an MSTP message.
     * @param type The type of this message.
     * @param action The action of this message.
     * @param headers The headers bound to this message.
     * @param data The data of this message.
     */
    public constructor(
        private readonly type: MSTPMessageType,
        private readonly action: string,
        private readonly headers: MSTPHeaders,
        private readonly data: string,
    ) {
    }

    /**
     * Returns the type of ths message.
     */
    public getType(): MSTPMessageType {
        return this.type
    }

    /**
     * Returns the action of ths message.
     */
    public getAction(): string {
        return this.action
    }

    /**
     * Returns the headers bound to this message
     */
    public getHeaders(): MSTPHeaders {
        return this.headers
    }

    /**
     * Returns the data of ths message.
     */
    public getData(): string {
        return this.data
    }

    /**
     * Returns the string of this message.
     */
    public toString(): string {
        const typeStr = MSTPMessage.MSTPMessageTypeMap[this.type]
        return `${typeStr} ${this.action}\n${this.headers.toString()}\n\n${this.data}`
    }
}