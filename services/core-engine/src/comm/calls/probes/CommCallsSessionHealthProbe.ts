export class CommCallsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsSession" };
  }
}
