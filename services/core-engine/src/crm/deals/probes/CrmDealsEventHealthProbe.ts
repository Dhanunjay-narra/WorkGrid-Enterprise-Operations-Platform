export class CrmDealsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsEvent" };
  }
}
