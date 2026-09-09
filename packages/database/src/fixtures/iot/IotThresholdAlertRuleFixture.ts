export function createIotThresholdAlertRuleFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "iot_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-IOT",
    name: "IotThresholdAlertRule Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
