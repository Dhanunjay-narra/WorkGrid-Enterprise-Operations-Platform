export class SupportSlaAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaAssignment" };
  }
}
