export class InvStockReservationCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvStockReservation with args:", args);
  }
}
