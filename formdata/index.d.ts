declare module "k6/x/fromdata" {
  export class Builder {
    /**
     * Add string field to formdata
     * @param key field name
     * @param value field value
     */
    add(key: string, value: string): void;

    /**
     * Add binary field to formdata
     * @param key field name
     * @param value field value
     */
    addBytes(key: string, value: ArrayBuffer): void;

    /**
     * Add file field to formdata
     * @param key field name
     * @param filename file name
     * @param value file content
     */
    addFile(key: string, filename: string, value: ArrayBuffer): void;

    /**
     * Build formdata content
     */
    build(): ArrayBuffer;

    /**
     * Get Content-Type header with boundary
     */
    getContentType(): string;
  }
}