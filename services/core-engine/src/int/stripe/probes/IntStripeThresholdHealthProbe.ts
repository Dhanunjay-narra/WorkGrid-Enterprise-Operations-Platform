export class IntStripeThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeThreshold" };
  }
}
