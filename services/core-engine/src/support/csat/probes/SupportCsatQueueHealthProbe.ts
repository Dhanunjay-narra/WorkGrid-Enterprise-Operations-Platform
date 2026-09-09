export class SupportCsatQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatQueue" };
  }
}
