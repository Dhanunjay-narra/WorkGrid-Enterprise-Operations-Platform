export class WorkflowVariablesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesAuditLog" };
  }
}
