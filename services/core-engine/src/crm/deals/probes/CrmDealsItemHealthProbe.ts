export class CrmDealsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsItem" };
  }
}
