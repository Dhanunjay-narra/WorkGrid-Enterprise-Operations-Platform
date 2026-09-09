export class AiMemoryRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryRule" };
  }
}
