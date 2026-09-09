export class BiCohortsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsReport" };
  }
}
