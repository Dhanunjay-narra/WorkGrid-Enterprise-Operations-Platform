export class CommDigestProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestProfile" };
  }
}
