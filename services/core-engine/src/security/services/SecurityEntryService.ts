import { SecurityEntryModel, SecurityEntryValidator } from "@nexora/types/domains/security/SecurityEntry";

export class SecurityEntryService {
  private repository = new Map<string, SecurityEntryModel>();

  public create(data: Omit<SecurityEntryModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityEntryModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityEntryModel>): SecurityEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityEntryModel = {
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
