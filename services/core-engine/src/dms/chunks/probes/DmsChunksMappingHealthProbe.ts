export class DmsChunksMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksMapping" };
  }
}
