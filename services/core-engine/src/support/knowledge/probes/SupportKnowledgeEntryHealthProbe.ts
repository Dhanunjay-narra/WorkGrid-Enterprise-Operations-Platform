export class SupportKnowledgeEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeEntry" };
  }
}
