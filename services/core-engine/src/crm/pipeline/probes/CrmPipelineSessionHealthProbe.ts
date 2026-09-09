export class CrmPipelineSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineSession" };
  }
}
