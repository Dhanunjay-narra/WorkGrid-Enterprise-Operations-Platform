import { EvtDeadLetterEventData, EvtDeadLetterEventValidator } from "../../../../packages/types/src/domains/events/EvtDeadLetterEvent";

export class EvtDeadLetterEventService {
  private repository = new Map<string, EvtDeadLetterEventData>();

  public create(data: Omit<EvtDeadLetterEventData, "id" | "createdAt" | "updatedAt">): EvtDeadLetterEventData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtDeadLetterEventData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtDeadLetterEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtDeadLetterEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtDeadLetterEventData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtDeadLetterEventData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtDeadLetterEventData>): EvtDeadLetterEventData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtDeadLetterEventData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
