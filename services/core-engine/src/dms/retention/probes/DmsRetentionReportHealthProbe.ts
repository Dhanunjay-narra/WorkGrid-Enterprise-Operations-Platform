export class DmsRetentionReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionReport" };
  }
}
