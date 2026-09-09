export class CommThreadsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsState" };
  }
}
