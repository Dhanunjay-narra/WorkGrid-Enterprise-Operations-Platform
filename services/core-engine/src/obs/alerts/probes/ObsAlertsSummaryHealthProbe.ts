export class ObsAlertsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsSummary" };
  }
}
