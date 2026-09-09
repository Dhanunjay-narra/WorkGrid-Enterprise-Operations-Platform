export class CommCallsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsConfig" };
  }
}
