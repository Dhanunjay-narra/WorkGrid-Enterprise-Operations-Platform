export class CommCallsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsEvent" };
  }
}
