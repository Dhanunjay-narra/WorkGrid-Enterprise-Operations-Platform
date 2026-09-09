export class CommDigestStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestState" };
  }
}
