export class SupTicketMessageCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SupTicketMessage with args:", args);
  }
}
