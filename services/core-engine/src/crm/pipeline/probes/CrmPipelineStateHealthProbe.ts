export class CrmPipelineStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineState" };
  }
}
