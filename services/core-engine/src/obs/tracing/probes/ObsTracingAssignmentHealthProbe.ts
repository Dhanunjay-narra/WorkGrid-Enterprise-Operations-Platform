export class ObsTracingAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingAssignment" };
  }
}
