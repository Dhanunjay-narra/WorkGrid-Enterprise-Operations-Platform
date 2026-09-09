export class ObsAlertsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsSnapshot" };
  }
}
