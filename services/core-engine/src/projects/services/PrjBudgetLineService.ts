import { PrjBudgetLineData, PrjBudgetLineValidator } from "../../../../packages/types/src/domains/projects/PrjBudgetLine";

export class PrjBudgetLineService {
  private repository = new Map<string, PrjBudgetLineData>();

  public create(data: Omit<PrjBudgetLineData, "id" | "createdAt" | "updatedAt">): PrjBudgetLineData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjBudgetLineData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjBudgetLineValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjBudgetLine: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjBudgetLineData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjBudgetLineData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjBudgetLineData>): PrjBudgetLineData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjBudgetLineData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
