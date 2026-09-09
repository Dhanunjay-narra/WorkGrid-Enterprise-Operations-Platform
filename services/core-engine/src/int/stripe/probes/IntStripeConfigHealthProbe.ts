export class IntStripeConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeConfig" };
  }
}
