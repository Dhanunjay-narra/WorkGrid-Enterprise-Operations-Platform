export class InvStockAuditCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvStockAudit with args:", args);
  }
}
