export class CommCallRoomCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommCallRoom with args:", args);
  }
}
