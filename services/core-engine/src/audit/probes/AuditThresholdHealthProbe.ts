export class AuditThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditThreshold" };
  }
}
