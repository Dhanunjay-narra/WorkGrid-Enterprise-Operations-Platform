export class IntStripePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripePolicy" };
  }
}
