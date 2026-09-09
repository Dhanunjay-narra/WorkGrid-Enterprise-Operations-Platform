export class AiTokenUsageRecordTelemetry {
  public static traceOperation(operationName: string, entityId: string, callback: () => any): any {
    const startTime = Date.now();
    try {
      const result = callback();
      const duration = Date.now() - startTime;
      console.log("[OTEL] AiTokenUsageRecord span " + operationName + " on " + entityId + " took " + duration + "ms");
      return result;
    } catch (err) {
      console.error("[OTEL-ERROR] AiTokenUsageRecord span failure on " + entityId, err);
      throw err;
    }
  }
}
