import { EvtEventSubscriptionData, EvtEventSubscriptionValidator } from "../../../../packages/types/src/domains/events/EvtEventSubscription";

export class EvtEventSubscriptionService {
  private repository = new Map<string, EvtEventSubscriptionData>();

  public create(data: Omit<EvtEventSubscriptionData, "id" | "createdAt" | "updatedAt">): EvtEventSubscriptionData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtEventSubscriptionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtEventSubscriptionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtEventSubscription: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtEventSubscriptionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtEventSubscriptionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtEventSubscriptionData>): EvtEventSubscriptionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtEventSubscriptionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
