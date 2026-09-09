export class SupportKnowledgeTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeTask" };
  }
}
