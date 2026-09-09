export class ObsProfilingSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingSummary" };
  }
}
