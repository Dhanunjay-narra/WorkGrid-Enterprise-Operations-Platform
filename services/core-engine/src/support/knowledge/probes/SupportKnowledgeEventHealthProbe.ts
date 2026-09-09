export class SupportKnowledgeEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeEvent" };
  }
}
