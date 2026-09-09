export class IotFleetTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetTransaction" };
  }
}
