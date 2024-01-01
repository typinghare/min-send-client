/**
 * MSTP (Min-Send Transfer Protocol) Headers.
 */
export class MSTPHeaders {
    /**
     * Mapping from keys to values.
     * @private
     */
    private readonly map: Record<string, string> = {}

    /**
     * Sets the value for a given key in the header.
     * @param key - The key for the header.
     * @param value - The value to set for the key.
     * @private
     */
    public set(key: string, value: string): void {
        this.map[key] = value
    }

    /**
     * Gets the value for a given key from the header.
     * @param key - The key for the header.
     * @returns The value for the key, or null if the key is not found.
     * @private
     */
    public get(key: string): string | null {
        return this.map[key] || null
    }

    /**
     * Returns the formatted string of headers.
     */
    public toString(): string {
        return Object.entries(this.map).map(([key, value]) => {
            return `${key}=${value}`
        }).join('\n')
    }
}