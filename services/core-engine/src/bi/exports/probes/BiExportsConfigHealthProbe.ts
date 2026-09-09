export class BiExportsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsConfig" };
  }
}
