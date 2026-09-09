export class CommDigestQueueCacheQueryEngine {
  public async mget(keys: string[]): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    keys.forEach(k => results.set(k, { key: k, domain: "communication", entity: "CommDigestQueue" }));
    return results;
  }
}
