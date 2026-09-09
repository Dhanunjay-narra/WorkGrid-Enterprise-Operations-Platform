export class IntStripeTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeTask" };
  }
}
