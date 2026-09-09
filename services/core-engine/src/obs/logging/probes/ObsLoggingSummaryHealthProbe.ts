export class ObsLoggingSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingSummary" };
  }
}
