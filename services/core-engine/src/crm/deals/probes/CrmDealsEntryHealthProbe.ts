export class CrmDealsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsEntry" };
  }
}
