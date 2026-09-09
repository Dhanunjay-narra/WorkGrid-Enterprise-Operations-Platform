export class CommDigestReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestReport" };
  }
}
