export class EvtPublishMetricCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for EvtPublishMetric with args:", args);
  }
}
