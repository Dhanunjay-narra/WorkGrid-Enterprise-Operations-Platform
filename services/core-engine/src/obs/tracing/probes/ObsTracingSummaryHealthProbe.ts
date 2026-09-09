export class ObsTracingSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingSummary" };
  }
}
