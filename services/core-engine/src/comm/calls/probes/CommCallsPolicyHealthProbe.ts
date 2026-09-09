export class CommCallsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsPolicy" };
  }
}
