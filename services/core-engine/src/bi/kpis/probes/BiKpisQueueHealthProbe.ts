export class BiKpisQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisQueue" };
  }
}
