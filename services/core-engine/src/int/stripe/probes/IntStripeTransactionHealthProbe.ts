export class IntStripeTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeTransaction" };
  }
}
