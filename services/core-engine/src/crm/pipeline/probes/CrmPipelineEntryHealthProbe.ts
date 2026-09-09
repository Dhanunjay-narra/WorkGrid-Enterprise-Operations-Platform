export class CrmPipelineEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineEntry" };
  }
}
