export interface IotTelemetryThresholdModel {
  id: string;
  tenantId: string;
  code: string;
  name: string;
  domain: "iot_telemetry";
  status: "ACTIVE" | "PENDING" | "SUSPENDED" | "ARCHIVED";
  version: number;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export class IotTelemetryThresholdValidator {
  public static validate(data: Partial<IotTelemetryThresholdModel>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (!data.id && data.id !== undefined) errors.push("Invalid identifier");
    if (!data.tenantId && data.tenantId !== undefined) errors.push("Invalid tenant context");
    if (data.version !== undefined && data.version < 1) errors.push("Version must be positive integer");
    return { isValid: errors.length === 0, errors };
  }
}
