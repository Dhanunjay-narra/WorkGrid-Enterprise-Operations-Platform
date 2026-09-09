export class EvtStreamSnapshotCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for EvtStreamSnapshot with args:", args);
  }
}
