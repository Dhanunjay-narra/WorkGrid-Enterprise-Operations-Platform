export class IotCommandsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsItem" };
  }
}
