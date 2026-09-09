export function generateAiModelFallbackLogSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "ai_seed_" + i,
      tenantId,
      code: "AI-" + (1000 + i),
      name: "Enterprise AiModelFallbackLog " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
