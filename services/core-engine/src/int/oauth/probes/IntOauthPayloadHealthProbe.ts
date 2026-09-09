export class IntOauthPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthPayload" };
  }
}
