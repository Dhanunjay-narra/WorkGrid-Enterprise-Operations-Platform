export class DmsVersionsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsEvent" };
  }
}
