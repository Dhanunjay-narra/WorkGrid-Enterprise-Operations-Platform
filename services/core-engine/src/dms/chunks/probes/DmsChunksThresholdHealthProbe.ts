export class DmsChunksThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksThreshold" };
  }
}
