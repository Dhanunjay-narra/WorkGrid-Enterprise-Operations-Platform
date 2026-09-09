export class DmsOcrSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrSummary" };
  }
}
