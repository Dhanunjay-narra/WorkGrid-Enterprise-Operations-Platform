export function generateCommBroadcastAnnouncementSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "com_seed_" + i,
      tenantId,
      code: "COMM-" + (1000 + i),
      name: "Enterprise CommBroadcastAnnouncement " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
