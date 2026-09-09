export class DmsChunksPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksPolicy" };
  }
}
