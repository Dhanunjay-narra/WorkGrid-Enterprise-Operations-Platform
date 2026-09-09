export class IntStripeEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeEvent" };
  }
}
