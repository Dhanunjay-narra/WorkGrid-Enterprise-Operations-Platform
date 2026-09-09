export class CrmHealthSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthSummary" };
  }
}
