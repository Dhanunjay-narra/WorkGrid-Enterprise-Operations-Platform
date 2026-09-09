export class WorkflowExecutionsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsAuditLog" };
  }
}
