export class PrjSprintRetrospectiveCacheQueryEngine {
  public async mget(keys: string[]): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    keys.forEach(k => results.set(k, { key: k, domain: "projects", entity: "PrjSprintRetrospective" }));
    return results;
  }
}
