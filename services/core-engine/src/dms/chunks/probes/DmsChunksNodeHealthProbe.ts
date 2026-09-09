export class DmsChunksNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksNode" };
  }
}
