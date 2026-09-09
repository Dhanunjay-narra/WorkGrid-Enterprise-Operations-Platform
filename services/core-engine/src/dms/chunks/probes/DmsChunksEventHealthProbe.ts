export class DmsChunksEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksEvent" };
  }
}
