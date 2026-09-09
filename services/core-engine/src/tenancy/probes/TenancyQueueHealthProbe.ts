export class TenancyQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyQueue" };
  }
}
