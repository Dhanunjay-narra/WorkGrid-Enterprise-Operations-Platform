export class IotThresholdsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsNode" };
  }
}
