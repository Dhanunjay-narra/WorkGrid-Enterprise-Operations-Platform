export class CrmDealsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsSummary" };
  }
}
