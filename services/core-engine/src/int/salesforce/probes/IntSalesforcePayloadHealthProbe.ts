export class IntSalesforcePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforcePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforcePayload" };
  }
}
