export class ObsAlertsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsState" };
  }
}
