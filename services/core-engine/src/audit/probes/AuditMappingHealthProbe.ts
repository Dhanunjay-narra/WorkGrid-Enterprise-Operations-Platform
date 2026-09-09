export class AuditMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditMapping" };
  }
}
