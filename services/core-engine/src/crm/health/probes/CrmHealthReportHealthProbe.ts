export class CrmHealthReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthReport" };
  }
}
