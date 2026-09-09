export class CrmDealsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsReport" };
  }
}
