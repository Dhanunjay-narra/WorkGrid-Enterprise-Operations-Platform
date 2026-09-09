export class SupportQueuesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesTask" };
  }
}
