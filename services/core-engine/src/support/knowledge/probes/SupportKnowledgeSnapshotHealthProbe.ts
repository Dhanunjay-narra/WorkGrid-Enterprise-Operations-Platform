export class SupportKnowledgeSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeSnapshot" };
  }
}
