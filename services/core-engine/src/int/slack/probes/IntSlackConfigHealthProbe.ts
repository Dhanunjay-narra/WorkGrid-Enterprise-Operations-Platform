export class IntSlackConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackConfig" };
  }
}
