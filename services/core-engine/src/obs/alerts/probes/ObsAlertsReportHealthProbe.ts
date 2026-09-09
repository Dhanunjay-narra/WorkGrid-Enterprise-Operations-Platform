export class ObsAlertsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsReport" };
  }
}
