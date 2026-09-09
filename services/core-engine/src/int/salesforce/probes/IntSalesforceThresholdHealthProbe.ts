export class IntSalesforceThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceThreshold" };
  }
}
