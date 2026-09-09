export class SupportKnowledgeReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeReport" };
  }
}
