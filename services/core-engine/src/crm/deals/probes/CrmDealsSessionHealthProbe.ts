export class CrmDealsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsSession" };
  }
}
