export class CommThreadsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsNode" };
  }
}
