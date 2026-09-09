export class DmsVersionsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsItem" };
  }
}
