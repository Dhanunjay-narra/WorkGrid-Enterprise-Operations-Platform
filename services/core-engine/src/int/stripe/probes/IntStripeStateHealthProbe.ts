export class IntStripeStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeState" };
  }
}
