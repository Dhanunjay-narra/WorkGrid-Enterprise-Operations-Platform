export class FinInvoiceCacheQueryEngine {
  public async mget(keys: string[]): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    keys.forEach(k => results.set(k, { key: k, domain: "finance", entity: "FinInvoice" }));
    return results;
  }
}
