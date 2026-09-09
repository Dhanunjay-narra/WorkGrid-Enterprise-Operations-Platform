export class SupportSlaRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaRule" };
  }
}
