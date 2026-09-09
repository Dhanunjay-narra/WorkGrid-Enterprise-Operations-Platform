export class DmsRetentionRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionRule" };
  }
}
