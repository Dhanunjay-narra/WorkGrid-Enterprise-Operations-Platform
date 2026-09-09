export class ObsAlertsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsPolicy" };
  }
}
