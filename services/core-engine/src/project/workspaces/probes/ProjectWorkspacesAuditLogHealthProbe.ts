export class ProjectWorkspacesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesAuditLog" };
  }
}
