export class EvtReplayJobCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for EvtReplayJob with args:", args);
  }
}
