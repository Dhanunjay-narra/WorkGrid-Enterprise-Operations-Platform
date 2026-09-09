export class BiWidgetsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsReport" };
  }
}
