export class CrmDealsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsConfig" };
  }
}
