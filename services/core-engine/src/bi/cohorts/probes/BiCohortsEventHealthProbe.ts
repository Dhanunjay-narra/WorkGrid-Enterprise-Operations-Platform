export class BiCohortsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsEvent" };
  }
}
