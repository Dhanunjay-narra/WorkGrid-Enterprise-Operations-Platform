export class EvtReplayJobCacheQueryEngine {
  public async mget(keys: string[]): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    keys.forEach(k => results.set(k, { key: k, domain: "events", entity: "EvtReplayJob" }));
    return results;
  }
}
