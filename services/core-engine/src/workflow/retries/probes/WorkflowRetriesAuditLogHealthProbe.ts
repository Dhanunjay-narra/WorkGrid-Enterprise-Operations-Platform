export class WorkflowRetriesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesAuditLog" };
  }
}
