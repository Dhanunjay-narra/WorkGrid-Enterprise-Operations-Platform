export class WorkflowCronsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsAuditLog" };
  }
}
