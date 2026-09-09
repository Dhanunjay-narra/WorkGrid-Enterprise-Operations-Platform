export class IntStripeQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeQueue" };
  }
}
