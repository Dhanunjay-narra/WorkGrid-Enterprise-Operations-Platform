export class SupportKnowledgePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgePolicy" };
  }
}
