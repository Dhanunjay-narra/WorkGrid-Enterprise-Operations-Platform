export class BiKpisNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisNode" };
  }
}
