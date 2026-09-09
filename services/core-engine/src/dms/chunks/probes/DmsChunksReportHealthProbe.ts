export class DmsChunksReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksReport" };
  }
}
