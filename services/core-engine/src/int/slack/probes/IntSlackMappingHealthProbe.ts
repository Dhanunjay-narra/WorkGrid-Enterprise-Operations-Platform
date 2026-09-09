export class IntSlackMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackMapping" };
  }
}
