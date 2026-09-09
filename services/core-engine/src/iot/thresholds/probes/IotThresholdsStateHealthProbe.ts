export class IotThresholdsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsState" };
  }
}
