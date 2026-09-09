export class IotThresholdsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsTransaction" };
  }
}
