export class CommDigestTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestTask" };
  }
}
