export class IotLocationsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsReport" };
  }
}
