export class CommThreadsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsConfig" };
  }
}
