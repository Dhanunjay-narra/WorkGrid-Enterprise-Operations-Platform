export class CrmPipelineReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineReport" };
  }
}
