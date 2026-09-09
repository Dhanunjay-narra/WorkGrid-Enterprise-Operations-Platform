export class DmsVersionsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsQueue" };
  }
}
