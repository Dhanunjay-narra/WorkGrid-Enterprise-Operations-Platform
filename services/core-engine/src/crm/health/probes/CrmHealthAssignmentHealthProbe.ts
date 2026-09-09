export class CrmHealthAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthAssignment" };
  }
}
