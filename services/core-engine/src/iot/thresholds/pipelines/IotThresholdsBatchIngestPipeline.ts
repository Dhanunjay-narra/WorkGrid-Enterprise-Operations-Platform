export class IotThresholdsBatchIngestPipeline {
  public static processIngest(record: Record<string, any>): { success: boolean; normalized: Record<string, any> } {
    const normalized: Record<string, any> = { ...record };
    normalized.ingestedAt = new Date().toISOString();
    normalized.checksum = "IotThresholdsBatch_" + Math.random().toString(36).substring(2, 9);
    return { success: true, normalized };
  }
}
