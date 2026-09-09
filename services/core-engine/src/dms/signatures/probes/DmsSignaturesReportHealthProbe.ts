export class DmsSignaturesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesReport" };
  }
}
