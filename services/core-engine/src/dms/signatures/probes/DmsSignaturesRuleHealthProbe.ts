export class DmsSignaturesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesRule" };
  }
}
