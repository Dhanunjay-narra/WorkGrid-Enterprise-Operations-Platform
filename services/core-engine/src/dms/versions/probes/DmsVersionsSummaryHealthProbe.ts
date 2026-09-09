export class DmsVersionsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsSummary" };
  }
}
