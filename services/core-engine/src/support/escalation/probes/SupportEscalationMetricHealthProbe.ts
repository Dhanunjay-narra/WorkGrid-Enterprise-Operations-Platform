export class SupportEscalationMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationMetric" };
  }
}
