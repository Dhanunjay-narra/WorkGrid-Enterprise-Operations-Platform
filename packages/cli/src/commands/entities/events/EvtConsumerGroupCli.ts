export class EvtConsumerGroupCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for EvtConsumerGroup with args:", args);
  }
}
