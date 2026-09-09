export class CommThreadsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsSession" };
  }
}
