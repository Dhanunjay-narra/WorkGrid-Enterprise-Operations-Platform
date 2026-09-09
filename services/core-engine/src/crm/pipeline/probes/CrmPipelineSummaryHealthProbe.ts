export class CrmPipelineSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineSummary" };
  }
}
