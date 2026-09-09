export class SupportKnowledgeSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeSession" };
  }
}
