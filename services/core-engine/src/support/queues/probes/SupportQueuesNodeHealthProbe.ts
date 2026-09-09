export class SupportQueuesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesNode" };
  }
}
