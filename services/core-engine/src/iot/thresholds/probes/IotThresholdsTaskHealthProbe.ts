export class IotThresholdsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsTask" };
  }
}
