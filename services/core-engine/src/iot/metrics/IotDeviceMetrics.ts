export class IotDeviceMetrics {
  private static opCount = 0;

  public static recordOperation(opType: "CREATE" | "READ" | "UPDATE" | "DELETE"): void {
    this.opCount++;
    console.log("[METRIC-PROMETHEUS] nexora_iot_device_operations_total{type=\"" + opType + "\"} " + this.opCount);
  }

  public static getCounter(): number {
    return this.opCount;
  }
}
