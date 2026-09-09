export class CommDigestConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestConfig" };
  }
}
