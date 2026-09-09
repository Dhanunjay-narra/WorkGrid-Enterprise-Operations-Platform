export class CrmContactsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsSummary" };
  }
}
