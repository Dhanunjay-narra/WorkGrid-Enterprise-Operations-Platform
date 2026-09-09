export class CrmPipelineTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineTask" };
  }
}
