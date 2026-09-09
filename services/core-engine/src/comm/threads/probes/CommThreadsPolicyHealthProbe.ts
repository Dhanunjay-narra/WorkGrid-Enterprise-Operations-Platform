export class CommThreadsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsPolicy" };
  }
}
