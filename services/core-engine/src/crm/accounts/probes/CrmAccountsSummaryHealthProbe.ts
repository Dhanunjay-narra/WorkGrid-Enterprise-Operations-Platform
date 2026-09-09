export class CrmAccountsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsSummary" };
  }
}
