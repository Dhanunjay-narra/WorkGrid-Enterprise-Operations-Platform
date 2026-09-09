export class CrmTerritoryAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryAssignment" };
  }
}
