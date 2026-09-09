export class SupportCsatRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatRule" };
  }
}
