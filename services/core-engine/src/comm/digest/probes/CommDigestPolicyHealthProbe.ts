export class CommDigestPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestPolicy" };
  }
}
