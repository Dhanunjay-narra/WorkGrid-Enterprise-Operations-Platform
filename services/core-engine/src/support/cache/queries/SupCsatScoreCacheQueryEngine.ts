export class SupCsatScoreCacheQueryEngine {
  public async mget(keys: string[]): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    keys.forEach(k => results.set(k, { key: k, domain: "support", entity: "SupCsatScore" }));
    return results;
  }
}
