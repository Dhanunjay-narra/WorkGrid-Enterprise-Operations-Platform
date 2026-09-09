export class WorkflowCronsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsPolicy" };
  }
}
