export class BiDataSourceCacheQueryEngine {
  public async mget(keys: string[]): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    keys.forEach(k => results.set(k, { key: k, domain: "analytics", entity: "BiDataSource" }));
    return results;
  }
}
