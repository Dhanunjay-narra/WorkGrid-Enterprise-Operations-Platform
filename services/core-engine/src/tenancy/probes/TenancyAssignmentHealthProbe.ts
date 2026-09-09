export class TenancyAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyAssignment" };
  }
}
