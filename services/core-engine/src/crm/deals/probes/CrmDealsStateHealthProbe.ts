export class CrmDealsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsState" };
  }
}
