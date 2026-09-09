export class ObsAlertsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsAssignment" };
  }
}
