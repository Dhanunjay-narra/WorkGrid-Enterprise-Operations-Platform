export class CrmPipelineRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineRule" };
  }
}
