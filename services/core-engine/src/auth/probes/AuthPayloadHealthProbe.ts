export class AuthPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthPayload" };
  }
}
