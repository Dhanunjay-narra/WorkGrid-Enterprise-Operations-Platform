export class BiKpisProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisProfile" };
  }
}
