export class ObsLoggingReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingReport" };
  }
}
