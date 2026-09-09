export class IdentityPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityPayload" };
  }
}
