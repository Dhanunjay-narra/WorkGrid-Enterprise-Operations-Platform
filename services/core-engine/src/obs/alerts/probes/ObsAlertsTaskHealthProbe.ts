export class ObsAlertsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsTask" };
  }
}
