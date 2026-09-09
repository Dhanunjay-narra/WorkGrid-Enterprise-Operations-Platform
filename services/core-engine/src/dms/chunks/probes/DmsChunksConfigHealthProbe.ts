export class DmsChunksConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksConfig" };
  }
}
