export class SupportSlaReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaReport" };
  }
}
