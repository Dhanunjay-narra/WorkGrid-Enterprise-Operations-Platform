export class IntRateLimitsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsPayload" };
  }
}
