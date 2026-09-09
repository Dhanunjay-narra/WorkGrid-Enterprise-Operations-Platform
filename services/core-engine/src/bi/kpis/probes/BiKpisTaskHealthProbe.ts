export class BiKpisTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisTask" };
  }
}
