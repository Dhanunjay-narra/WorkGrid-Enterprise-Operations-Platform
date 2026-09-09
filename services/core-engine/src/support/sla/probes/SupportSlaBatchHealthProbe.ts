export class SupportSlaBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaBatch" };
  }
}
