import { CrmLeadScoreData, CrmLeadScoreValidator } from "../../../../packages/types/src/domains/crm/CrmLeadScore";

export class CrmLeadScoreService {
  private repository = new Map<string, CrmLeadScoreData>();

  public create(data: Omit<CrmLeadScoreData, "id" | "createdAt" | "updatedAt">): CrmLeadScoreData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmLeadScoreData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadScoreValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadScore: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadScoreData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmLeadScoreData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmLeadScoreData>): CrmLeadScoreData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadScoreData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
