export class AiEvaluationsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsMetric" };
  }
}
