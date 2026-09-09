export class ObsAlertsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsSession" };
  }
}
