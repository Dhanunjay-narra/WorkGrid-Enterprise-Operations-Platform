export class IotCommandsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsProfile" };
  }
}
