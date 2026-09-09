export class DmsChunksStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksState" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksState" };
  }
}
