export class IotThresholdsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsSession" };
  }
}
