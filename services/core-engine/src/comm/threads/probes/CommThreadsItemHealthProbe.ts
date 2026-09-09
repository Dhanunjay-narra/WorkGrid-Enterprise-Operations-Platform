export class CommThreadsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsItem" };
  }
}
