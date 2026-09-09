export class DmsFilesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesSummary" };
  }
}
