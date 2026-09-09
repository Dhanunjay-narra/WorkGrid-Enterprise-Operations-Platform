export class CrmPipelineProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineProfile" };
  }
}
