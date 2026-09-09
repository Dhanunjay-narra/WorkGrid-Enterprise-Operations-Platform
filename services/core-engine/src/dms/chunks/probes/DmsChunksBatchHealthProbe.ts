export class DmsChunksBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksBatch" };
  }
}
