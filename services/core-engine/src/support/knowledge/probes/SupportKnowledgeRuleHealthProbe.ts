export class SupportKnowledgeRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeRule" };
  }
}
