export class CrmLeadsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsAssignment" };
  }
}
