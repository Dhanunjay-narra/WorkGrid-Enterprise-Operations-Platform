export class SupTicketCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SupTicket with args:", args);
  }
}
