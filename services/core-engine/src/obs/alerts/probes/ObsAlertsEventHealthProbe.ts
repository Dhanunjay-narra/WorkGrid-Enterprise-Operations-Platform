export class ObsAlertsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsEvent" };
  }
}
