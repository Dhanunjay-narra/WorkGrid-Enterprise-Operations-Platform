export class CrmDealsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsQueue" };
  }
}
