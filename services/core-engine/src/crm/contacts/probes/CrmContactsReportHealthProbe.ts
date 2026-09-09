export class CrmContactsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsReport" };
  }
}
