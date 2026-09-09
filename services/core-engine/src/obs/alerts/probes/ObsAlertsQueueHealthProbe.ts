export class ObsAlertsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsQueue" };
  }
}
