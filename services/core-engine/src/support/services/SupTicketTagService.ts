import { SupTicketTagData, SupTicketTagValidator } from "../../../../packages/types/src/domains/support/SupTicketTag";

export class SupTicketTagService {
  private repository = new Map<string, SupTicketTagData>();

  public create(data: Omit<SupTicketTagData, "id" | "createdAt" | "updatedAt">): SupTicketTagData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupTicketTagData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupTicketTagValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupTicketTag: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupTicketTagData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupTicketTagData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupTicketTagData>): SupTicketTagData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupTicketTagData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
