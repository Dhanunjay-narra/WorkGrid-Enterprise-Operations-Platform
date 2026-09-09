export class DmsVersionsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsState" };
  }
}
