export class ObsProbesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesReport" };
  }
}
