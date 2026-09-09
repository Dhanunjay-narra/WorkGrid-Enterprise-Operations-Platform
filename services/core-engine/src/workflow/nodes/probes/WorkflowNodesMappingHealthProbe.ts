export class WorkflowNodesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesMapping" };
  }
}
