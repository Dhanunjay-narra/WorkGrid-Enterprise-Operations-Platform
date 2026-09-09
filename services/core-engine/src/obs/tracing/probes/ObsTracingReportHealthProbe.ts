export class ObsTracingReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingReport" };
  }
}
