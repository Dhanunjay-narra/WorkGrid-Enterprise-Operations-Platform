export class TenancyRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyRule" };
  }
}
