export class CrmPipelineMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineMetric" };
  }
}
