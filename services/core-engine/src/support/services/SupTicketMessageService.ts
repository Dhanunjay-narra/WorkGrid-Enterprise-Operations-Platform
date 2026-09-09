import { SupTicketMessageData, SupTicketMessageValidator } from "../../../../packages/types/src/domains/support/SupTicketMessage";

export class SupTicketMessageService {
  private repository = new Map<string, SupTicketMessageData>();

  public create(data: Omit<SupTicketMessageData, "id" | "createdAt" | "updatedAt">): SupTicketMessageData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupTicketMessageData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupTicketMessageValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupTicketMessage: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupTicketMessageData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupTicketMessageData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupTicketMessageData>): SupTicketMessageData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupTicketMessageData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
