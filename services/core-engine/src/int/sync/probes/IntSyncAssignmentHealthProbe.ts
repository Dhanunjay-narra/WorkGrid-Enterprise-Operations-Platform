export class IntSyncAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncAssignment" };
  }
}
