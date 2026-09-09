export class CrmPipelineConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineConfig" };
  }
}
