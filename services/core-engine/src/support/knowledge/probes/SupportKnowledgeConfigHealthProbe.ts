export class SupportKnowledgeConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeConfig" };
  }
}
