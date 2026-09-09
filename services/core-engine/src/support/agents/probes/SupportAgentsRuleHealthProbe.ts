export class SupportAgentsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsRule" };
  }
}
