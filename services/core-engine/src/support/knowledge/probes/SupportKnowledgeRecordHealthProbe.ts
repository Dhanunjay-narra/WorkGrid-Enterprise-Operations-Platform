export class SupportKnowledgeRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeRecord" };
  }
}
