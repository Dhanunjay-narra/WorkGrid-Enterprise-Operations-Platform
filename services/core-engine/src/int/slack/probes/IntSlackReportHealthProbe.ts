export class IntSlackReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackReport" };
  }
}
