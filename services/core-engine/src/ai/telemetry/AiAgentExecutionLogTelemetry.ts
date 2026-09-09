export class AiAgentExecutionLogTelemetry {
  public static traceOperation(operationName: string, entityId: string, callback: () => any): any {
    const startTime = Date.now();
    try {
      const result = callback();
      const duration = Date.now() - startTime;
      console.log("[OTEL] AiAgentExecutionLog span " + operationName + " on " + entityId + " took " + duration + "ms");
      return result;
    } catch (err) {
      console.error("[OTEL-ERROR] AiAgentExecutionLog span failure on " + entityId, err);
      throw err;
    }
  }
}
