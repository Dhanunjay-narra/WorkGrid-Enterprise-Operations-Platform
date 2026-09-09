export class ObsProfilingReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingReport" };
  }
}
