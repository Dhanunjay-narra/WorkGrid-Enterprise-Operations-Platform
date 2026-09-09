export class ObsDashboardsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsAssignment" };
  }
}
