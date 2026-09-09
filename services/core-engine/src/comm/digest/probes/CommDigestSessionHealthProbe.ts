export class CommDigestSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestSession" };
  }
}
