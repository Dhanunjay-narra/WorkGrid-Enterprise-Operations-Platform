export class WorkflowCronsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsMapping" };
  }
}
