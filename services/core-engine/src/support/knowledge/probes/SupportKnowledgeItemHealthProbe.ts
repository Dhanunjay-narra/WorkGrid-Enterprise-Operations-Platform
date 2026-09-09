export class SupportKnowledgeItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeItem" };
  }
}
