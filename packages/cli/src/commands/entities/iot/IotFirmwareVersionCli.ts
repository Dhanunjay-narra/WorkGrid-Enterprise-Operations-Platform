export class IotFirmwareVersionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IotFirmwareVersion with args:", args);
  }
}
