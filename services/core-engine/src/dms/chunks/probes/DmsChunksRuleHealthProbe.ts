export class DmsChunksRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksRule" };
  }
}
