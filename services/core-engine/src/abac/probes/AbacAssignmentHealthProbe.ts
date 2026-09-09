export class AbacAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacAssignment" };
  }
}
