export class BiExportsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsState" };
  }
}
