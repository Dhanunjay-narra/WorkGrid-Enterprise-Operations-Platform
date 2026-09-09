export class SecurityQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityQueue" };
  }
}
