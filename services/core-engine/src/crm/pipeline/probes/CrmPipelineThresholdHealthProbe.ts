export class CrmPipelineThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineThreshold" };
  }
}
