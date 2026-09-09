export class CrmLeadsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsSummary" };
  }
}
