import { SupTicketData, SupTicketValidator } from "../../../../packages/types/src/domains/support/SupTicket";

export class SupTicketService {
  private repository = new Map<string, SupTicketData>();

  public create(data: Omit<SupTicketData, "id" | "createdAt" | "updatedAt">): SupTicketData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupTicketData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupTicketValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupTicket: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupTicketData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupTicketData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupTicketData>): SupTicketData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupTicketData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
