import { EvtIdempotencyRecordData, EvtIdempotencyRecordValidator } from "../../../../packages/types/src/domains/events/EvtIdempotencyRecord";

export class EvtIdempotencyRecordService {
  private repository = new Map<string, EvtIdempotencyRecordData>();

  public create(data: Omit<EvtIdempotencyRecordData, "id" | "createdAt" | "updatedAt">): EvtIdempotencyRecordData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtIdempotencyRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtIdempotencyRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtIdempotencyRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtIdempotencyRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtIdempotencyRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtIdempotencyRecordData>): EvtIdempotencyRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtIdempotencyRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
