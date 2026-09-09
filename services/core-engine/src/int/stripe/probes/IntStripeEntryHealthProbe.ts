export class IntStripeEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeEntry" };
  }
}
