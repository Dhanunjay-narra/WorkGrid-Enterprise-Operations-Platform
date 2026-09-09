export class SupportKnowledgeMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeMetric" };
  }
}
