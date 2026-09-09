export class CommCallsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsItem" };
  }
}
