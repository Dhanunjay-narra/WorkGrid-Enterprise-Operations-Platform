import { SupCsatScoreData, SupCsatScoreValidator } from "../../../../packages/types/src/domains/support/SupCsatScore";

export class SupCsatScoreService {
  private repository = new Map<string, SupCsatScoreData>();

  public create(data: Omit<SupCsatScoreData, "id" | "createdAt" | "updatedAt">): SupCsatScoreData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupCsatScoreData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupCsatScoreValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupCsatScore: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupCsatScoreData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupCsatScoreData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupCsatScoreData>): SupCsatScoreData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupCsatScoreData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
