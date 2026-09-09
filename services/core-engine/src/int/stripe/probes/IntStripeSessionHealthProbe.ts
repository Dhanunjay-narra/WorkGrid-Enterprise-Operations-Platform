export class IntStripeSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeSession" };
  }
}
