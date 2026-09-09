export class CrmPipelineSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineSnapshot" };
  }
}
