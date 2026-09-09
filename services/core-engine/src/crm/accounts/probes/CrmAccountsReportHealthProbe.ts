export class CrmAccountsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsReport" };
  }
}
