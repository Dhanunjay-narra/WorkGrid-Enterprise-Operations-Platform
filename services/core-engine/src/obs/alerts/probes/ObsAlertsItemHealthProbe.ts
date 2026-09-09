export class ObsAlertsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsItem" };
  }
}
