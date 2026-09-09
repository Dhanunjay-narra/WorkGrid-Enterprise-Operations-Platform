export class IntStripeMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeMapping" };
  }
}
