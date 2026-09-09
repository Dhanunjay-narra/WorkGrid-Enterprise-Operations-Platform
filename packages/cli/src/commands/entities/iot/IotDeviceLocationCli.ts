export class IotDeviceLocationCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IotDeviceLocation with args:", args);
  }
}
