export class AiPromptsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsRule" };
  }
}
