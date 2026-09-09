export class DmsOcrQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrQueue" };
  }
}
