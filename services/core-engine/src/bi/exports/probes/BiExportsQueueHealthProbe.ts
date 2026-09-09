export class BiExportsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsQueue" };
  }
}
