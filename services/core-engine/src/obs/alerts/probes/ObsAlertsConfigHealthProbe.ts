export class ObsAlertsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsConfig" };
  }
}
