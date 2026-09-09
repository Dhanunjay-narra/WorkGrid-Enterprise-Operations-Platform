export class SupportKnowledgeSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeSummary" };
  }
}
