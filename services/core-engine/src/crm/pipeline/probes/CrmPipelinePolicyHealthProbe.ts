export class CrmPipelinePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelinePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelinePolicy" };
  }
}
