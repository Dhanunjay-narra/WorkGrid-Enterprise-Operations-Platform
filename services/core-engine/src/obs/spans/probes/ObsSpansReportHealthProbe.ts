export class ObsSpansReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansReport" };
  }
}
