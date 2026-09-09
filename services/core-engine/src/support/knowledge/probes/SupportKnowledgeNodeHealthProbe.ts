export class SupportKnowledgeNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeNode" };
  }
}
