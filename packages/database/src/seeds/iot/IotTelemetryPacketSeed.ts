export function generateIotTelemetryPacketSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "iot_seed_" + i,
      tenantId,
      code: "IOT-" + (1000 + i),
      name: "Enterprise IotTelemetryPacket " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
