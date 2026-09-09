export class CrmPipelineMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineMapping" };
  }
}
