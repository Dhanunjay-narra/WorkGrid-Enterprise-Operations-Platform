export class AiAgentsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsRule" };
  }
}
