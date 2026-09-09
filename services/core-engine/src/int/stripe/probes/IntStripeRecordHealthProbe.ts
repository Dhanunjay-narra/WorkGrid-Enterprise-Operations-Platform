export class IntStripeRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeRecord" };
  }
}
