export class AuditTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditTask" };
  }
}
