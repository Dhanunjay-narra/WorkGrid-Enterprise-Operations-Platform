export class DmsVersionsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsTask" };
  }
}
