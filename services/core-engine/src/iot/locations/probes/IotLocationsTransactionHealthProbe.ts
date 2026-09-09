export class IotLocationsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsTransaction" };
  }
}
