export class EvtEventBatchCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for EvtEventBatch with args:", args);
  }
}
