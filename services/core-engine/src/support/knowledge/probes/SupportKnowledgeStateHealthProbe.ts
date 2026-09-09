export class SupportKnowledgeStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeState" };
  }
}
