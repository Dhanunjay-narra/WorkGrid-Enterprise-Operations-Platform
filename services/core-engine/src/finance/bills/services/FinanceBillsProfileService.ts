import { FinanceBillsProfileModel, FinanceBillsProfileValidator } from "@nexora/types/domains/finance/bills/FinanceBillsProfile";

export class FinanceBillsProfileService {
  private repository = new Map<string, FinanceBillsProfileModel>();

  public create(data: Omit<FinanceBillsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsProfileModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsProfileModel>): FinanceBillsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsProfileModel = {
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
