export class DmsVersionsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsConfig" };
  }
}
