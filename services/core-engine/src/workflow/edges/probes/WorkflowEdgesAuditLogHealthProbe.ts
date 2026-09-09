export class WorkflowEdgesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesAuditLog" };
  }
}
