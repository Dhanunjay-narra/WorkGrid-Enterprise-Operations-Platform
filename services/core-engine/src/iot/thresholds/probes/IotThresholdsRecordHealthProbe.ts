export class IotThresholdsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsRecord" };
  }
}
