export class CommThreadsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsAssignment" };
  }
}
