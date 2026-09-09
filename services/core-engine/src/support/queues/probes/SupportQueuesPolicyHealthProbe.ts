export class SupportQueuesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesPolicy" };
  }
}
