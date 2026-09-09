export class DmsChunksItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksItem" };
  }
}
