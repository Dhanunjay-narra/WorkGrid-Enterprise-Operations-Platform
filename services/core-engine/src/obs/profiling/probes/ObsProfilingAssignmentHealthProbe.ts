export class ObsProfilingAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingAssignment" };
  }
}
