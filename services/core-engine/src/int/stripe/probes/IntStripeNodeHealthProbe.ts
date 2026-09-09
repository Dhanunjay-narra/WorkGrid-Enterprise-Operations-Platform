export class IntStripeNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeNode" };
  }
}
