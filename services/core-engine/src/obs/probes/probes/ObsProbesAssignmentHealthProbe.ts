export class ObsProbesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesAssignment" };
  }
}
