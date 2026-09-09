export class SupportKnowledgeProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeProfile" };
  }
}
