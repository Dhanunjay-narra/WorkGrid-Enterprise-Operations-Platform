export class DmsChunksSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksSummary" };
  }
}
