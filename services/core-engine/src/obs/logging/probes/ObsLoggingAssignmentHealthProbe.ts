export class ObsLoggingAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingAssignment" };
  }
}
