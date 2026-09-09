import { ComplianceEntryModel, ComplianceEntryValidator } from "@nexora/types/domains/compliance/ComplianceEntry";

export class ComplianceEntryService {
  private repository = new Map<string, ComplianceEntryModel>();

  public create(data: Omit<ComplianceEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceEntryModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceEntryModel>): ComplianceEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceEntryModel = {
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
