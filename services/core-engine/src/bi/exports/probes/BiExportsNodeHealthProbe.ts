export class BiExportsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsNode" };
  }
}
