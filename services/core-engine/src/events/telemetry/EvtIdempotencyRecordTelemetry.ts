export class EvtIdempotencyRecordTelemetry {
  public static traceOperation(operationName: string, entityId: string, callback: () => any): any {
    const startTime = Date.now();
    try {
      const result = callback();
      const duration = Date.now() - startTime;
      console.log("[OTEL] EvtIdempotencyRecord span " + operationName + " on " + entityId + " took " + duration + "ms");
      return result;
    } catch (err) {
      console.error("[OTEL-ERROR] EvtIdempotencyRecord span failure on " + entityId, err);
      throw err;
    }
  }
}
