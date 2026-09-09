export class AiToolsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsRule" };
  }
}
