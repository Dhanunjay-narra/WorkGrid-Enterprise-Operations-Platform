export class CommDigestEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestEvent" };
  }
}
