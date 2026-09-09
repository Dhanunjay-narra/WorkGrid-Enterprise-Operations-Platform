export class BiExportsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsSession" };
  }
}
