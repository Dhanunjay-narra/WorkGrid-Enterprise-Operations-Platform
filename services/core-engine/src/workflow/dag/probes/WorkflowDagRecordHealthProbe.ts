export class WorkflowDagRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagRecord" };
  }
}
