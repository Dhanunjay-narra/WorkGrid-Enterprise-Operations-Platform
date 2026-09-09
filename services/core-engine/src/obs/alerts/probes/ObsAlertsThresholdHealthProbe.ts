export class ObsAlertsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsThreshold" };
  }
}
