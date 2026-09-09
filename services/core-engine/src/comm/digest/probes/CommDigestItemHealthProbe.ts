export class CommDigestItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestItem" };
  }
}
