export class IdAuditTrailCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdAuditTrail with args:", args);
  }
}
