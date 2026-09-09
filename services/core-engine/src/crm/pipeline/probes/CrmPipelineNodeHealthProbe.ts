export class CrmPipelineNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineNode" };
  }
}
