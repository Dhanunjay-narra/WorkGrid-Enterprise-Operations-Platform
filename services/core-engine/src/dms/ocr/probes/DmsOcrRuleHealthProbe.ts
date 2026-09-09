export class DmsOcrRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrRule" };
  }
}
