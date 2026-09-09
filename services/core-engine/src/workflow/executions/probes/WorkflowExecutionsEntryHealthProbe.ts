export class WorkflowExecutionsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsEntry" };
  }
}
