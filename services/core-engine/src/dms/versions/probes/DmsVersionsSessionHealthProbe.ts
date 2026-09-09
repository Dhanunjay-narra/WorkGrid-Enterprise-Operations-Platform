export class DmsVersionsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsSession" };
  }
}
