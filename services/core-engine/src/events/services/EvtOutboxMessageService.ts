import { EvtOutboxMessageData, EvtOutboxMessageValidator } from "../../../../packages/types/src/domains/events/EvtOutboxMessage";

export class EvtOutboxMessageService {
  private repository = new Map<string, EvtOutboxMessageData>();

  public create(data: Omit<EvtOutboxMessageData, "id" | "createdAt" | "updatedAt">): EvtOutboxMessageData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtOutboxMessageData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtOutboxMessageValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtOutboxMessage: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtOutboxMessageData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtOutboxMessageData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtOutboxMessageData>): EvtOutboxMessageData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtOutboxMessageData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
