export class DmsOcrReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrReport" };
  }
}
