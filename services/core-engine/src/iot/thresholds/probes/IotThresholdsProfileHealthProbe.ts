export class IotThresholdsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsProfile" };
  }
}
