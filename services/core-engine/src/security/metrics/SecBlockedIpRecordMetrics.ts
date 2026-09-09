export class SecBlockedIpRecordMetrics {
  private static opCount = 0;

  public static recordOperation(opType: "CREATE" | "READ" | "UPDATE" | "DELETE"): void {
    this.opCount++;
    console.log("[METRIC-PROMETHEUS] nexora_security_blockediprecord_operations_total{type=\"" + opType + "\"} " + this.opCount);
  }

  public static getCounter(): number {
    return this.opCount;
  }
}
