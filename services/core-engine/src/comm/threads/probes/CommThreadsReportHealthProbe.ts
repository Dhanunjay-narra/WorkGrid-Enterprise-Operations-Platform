export class CommThreadsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsReport" };
  }
}
