import { CrmCompetitorIntelData, CrmCompetitorIntelValidator } from "../../../../packages/types/src/domains/crm/CrmCompetitorIntel";

export class CrmCompetitorIntelService {
  private repository = new Map<string, CrmCompetitorIntelData>();

  public create(data: Omit<CrmCompetitorIntelData, "id" | "createdAt" | "updatedAt">): CrmCompetitorIntelData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmCompetitorIntelData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmCompetitorIntelValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmCompetitorIntel: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmCompetitorIntelData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmCompetitorIntelData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmCompetitorIntelData>): CrmCompetitorIntelData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmCompetitorIntelData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
