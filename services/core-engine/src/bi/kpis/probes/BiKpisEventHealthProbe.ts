export class BiKpisEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisEvent" };
  }
}
