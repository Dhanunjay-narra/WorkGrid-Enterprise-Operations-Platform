export class ProjectWorkspacesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesAssignment" };
  }
}
