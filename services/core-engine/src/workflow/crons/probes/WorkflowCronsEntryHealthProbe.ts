export class WorkflowCronsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsEntry" };
  }
}
