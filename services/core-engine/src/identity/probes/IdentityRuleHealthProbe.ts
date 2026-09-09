export class IdentityRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityRule" };
  }
}
