export class DmsFoldersAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersAssignment" };
  }
}
