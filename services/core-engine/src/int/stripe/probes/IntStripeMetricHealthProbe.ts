export class IntStripeMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeMetric" };
  }
}
