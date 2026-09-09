import { EvtEventBatchData, EvtEventBatchValidator } from "../../../../packages/types/src/domains/events/EvtEventBatch";

export class EvtEventBatchService {
  private repository = new Map<string, EvtEventBatchData>();

  public create(data: Omit<EvtEventBatchData, "id" | "createdAt" | "updatedAt">): EvtEventBatchData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtEventBatchData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtEventBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtEventBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtEventBatchData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtEventBatchData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtEventBatchData>): EvtEventBatchData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtEventBatchData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
