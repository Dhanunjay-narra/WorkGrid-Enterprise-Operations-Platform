export class SupportSurveysMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSurveysMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSurveysMetric" };
  }
}
