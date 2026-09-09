import { EvtConsumerGroupData, EvtConsumerGroupValidator } from "../../../../packages/types/src/domains/events/EvtConsumerGroup";

export class EvtConsumerGroupService {
  private repository = new Map<string, EvtConsumerGroupData>();

  public create(data: Omit<EvtConsumerGroupData, "id" | "createdAt" | "updatedAt">): EvtConsumerGroupData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtConsumerGroupData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtConsumerGroupValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtConsumerGroup: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtConsumerGroupData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtConsumerGroupData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtConsumerGroupData>): EvtConsumerGroupData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtConsumerGroupData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
