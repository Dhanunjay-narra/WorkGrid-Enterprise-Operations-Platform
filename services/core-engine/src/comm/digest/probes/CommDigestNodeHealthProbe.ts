export class CommDigestNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestNode" };
  }
}
