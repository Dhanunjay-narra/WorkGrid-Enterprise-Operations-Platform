export class CommThreadsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsTask" };
  }
}
