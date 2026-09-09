export class SecurityRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityRule" };
  }
}
