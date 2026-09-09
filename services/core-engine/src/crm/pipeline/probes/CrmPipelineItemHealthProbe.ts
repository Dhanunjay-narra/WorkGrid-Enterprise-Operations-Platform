export class CrmPipelineItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineItem" };
  }
}
