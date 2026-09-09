import { EvtEventPartitionData, EvtEventPartitionValidator } from "../../../../packages/types/src/domains/events/EvtEventPartition";

export class EvtEventPartitionService {
  private repository = new Map<string, EvtEventPartitionData>();

  public create(data: Omit<EvtEventPartitionData, "id" | "createdAt" | "updatedAt">): EvtEventPartitionData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtEventPartitionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtEventPartitionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtEventPartition: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtEventPartitionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtEventPartitionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtEventPartitionData>): EvtEventPartitionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtEventPartitionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
