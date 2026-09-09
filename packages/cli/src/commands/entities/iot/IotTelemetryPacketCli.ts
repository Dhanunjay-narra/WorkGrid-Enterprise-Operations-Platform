export class IotTelemetryPacketCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IotTelemetryPacket with args:", args);
  }
}
