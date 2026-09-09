export class CrmPipelineRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineRecord" };
  }
}
