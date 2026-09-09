export class BiWidgetsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsSession" };
  }
}
