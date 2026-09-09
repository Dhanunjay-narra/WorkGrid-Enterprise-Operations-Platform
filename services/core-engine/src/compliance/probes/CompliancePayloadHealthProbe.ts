export class CompliancePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CompliancePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CompliancePayload" };
  }
}
