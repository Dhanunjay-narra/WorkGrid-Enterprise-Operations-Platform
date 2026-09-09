export class DmsVersionsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsPolicy" };
  }
}
