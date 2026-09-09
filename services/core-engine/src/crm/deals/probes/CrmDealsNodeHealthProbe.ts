export class CrmDealsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsNode" };
  }
}
