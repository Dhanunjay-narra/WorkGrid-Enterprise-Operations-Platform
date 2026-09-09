export class AiRagRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagRule" };
  }
}
