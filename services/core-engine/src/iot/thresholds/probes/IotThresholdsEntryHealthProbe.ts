export class IotThresholdsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsEntry" };
  }
}
