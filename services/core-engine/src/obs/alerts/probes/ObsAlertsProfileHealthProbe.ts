export class ObsAlertsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsProfile" };
  }
}
