import { EvtDomainEventSchemaData, EvtDomainEventSchemaValidator } from "../../../../packages/types/src/domains/events/EvtDomainEventSchema";

export class EvtDomainEventSchemaService {
  private repository = new Map<string, EvtDomainEventSchemaData>();

  public create(data: Omit<EvtDomainEventSchemaData, "id" | "createdAt" | "updatedAt">): EvtDomainEventSchemaData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtDomainEventSchemaData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtDomainEventSchemaValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtDomainEventSchema: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtDomainEventSchemaData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtDomainEventSchemaData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtDomainEventSchemaData>): EvtDomainEventSchemaData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtDomainEventSchemaData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
