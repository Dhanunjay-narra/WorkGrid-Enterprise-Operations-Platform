export function generateIotThresholdsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
