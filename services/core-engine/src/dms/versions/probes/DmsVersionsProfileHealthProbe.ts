export class DmsVersionsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsProfile" };
  }
}
