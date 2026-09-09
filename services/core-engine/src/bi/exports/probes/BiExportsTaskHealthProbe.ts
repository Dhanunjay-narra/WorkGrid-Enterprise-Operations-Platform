export class BiExportsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsTask" };
  }
}
