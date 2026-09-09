export class PrjRiskItemCacheQueryEngine {
  public async mget(keys: string[]): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    keys.forEach(k => results.set(k, { key: k, domain: "projects", entity: "PrjRiskItem" }));
    return results;
  }
}
