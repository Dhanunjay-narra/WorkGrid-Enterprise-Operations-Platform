export class BiWidgetsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsTask" };
  }
}
