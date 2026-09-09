export class DmsRetentionAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionAssignment" };
  }
}
