export class CrmHealthItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthItem" };
  }
}
