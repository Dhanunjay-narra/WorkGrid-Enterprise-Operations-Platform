export class SupportQueuesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesState" };
  }
}
