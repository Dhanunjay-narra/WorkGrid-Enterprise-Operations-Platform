import { ComplianceItemModel, ComplianceItemValidator } from "@nexora/types/domains/compliance/ComplianceItem";

export class ComplianceItemService {
  private repository = new Map<string, ComplianceItemModel>();

  public create(data: Omit<ComplianceItemModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceItemModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceItemModel>): ComplianceItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceItemModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
