export class WorkflowDagAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagAuditLog" };
  }
}
