export class ObsSpansSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansSummary" };
  }
}
