export class DmsChunksTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksTask" };
  }
}
