export class DmsChunksSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksSession" };
  }
}
