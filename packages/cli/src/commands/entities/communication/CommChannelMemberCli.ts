export class CommChannelMemberCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommChannelMember with args:", args);
  }
}
