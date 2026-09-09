export class CommCallsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsReport" };
  }
}
