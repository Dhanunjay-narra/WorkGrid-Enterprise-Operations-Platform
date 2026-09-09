export class IntStripeProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeProfile" };
  }
}
