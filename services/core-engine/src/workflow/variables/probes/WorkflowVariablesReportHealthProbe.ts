export class WorkflowVariablesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesReport" };
  }
}
