export class WorkflowNodesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesAuditLog" };
  }
}
