export class AuditPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditPayload" };
  }
}
