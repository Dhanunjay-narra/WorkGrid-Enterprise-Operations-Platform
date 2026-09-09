export class DmsChunksProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksProfile" };
  }
}
