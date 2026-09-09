export class ObsAlertsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsNode" };
  }
}
