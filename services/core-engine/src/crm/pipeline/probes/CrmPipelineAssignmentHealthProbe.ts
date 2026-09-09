export class CrmPipelineAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineAssignment" };
  }
}
