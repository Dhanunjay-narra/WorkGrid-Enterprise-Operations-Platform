export class SecurityPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityPayload" };
  }
}
