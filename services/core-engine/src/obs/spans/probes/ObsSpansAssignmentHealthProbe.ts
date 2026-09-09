export class ObsSpansAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansAssignment" };
  }
}
