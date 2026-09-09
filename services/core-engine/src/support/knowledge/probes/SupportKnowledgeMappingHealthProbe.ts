export class SupportKnowledgeMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeMapping" };
  }
}
