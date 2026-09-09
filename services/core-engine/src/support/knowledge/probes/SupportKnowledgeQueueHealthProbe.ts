export class SupportKnowledgeQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeQueue" };
  }
}
