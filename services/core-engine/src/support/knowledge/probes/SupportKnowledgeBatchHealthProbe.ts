export class SupportKnowledgeBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeBatch" };
  }
}
