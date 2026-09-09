export class CommCallsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsProfile" };
  }
}
