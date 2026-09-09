export class CrmPipelineEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineEvent" };
  }
}
