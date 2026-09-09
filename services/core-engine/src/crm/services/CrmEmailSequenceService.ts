import { CrmEmailSequenceData, CrmEmailSequenceValidator } from "../../../../packages/types/src/domains/crm/CrmEmailSequence";

export class CrmEmailSequenceService {
  private repository = new Map<string, CrmEmailSequenceData>();

  public create(data: Omit<CrmEmailSequenceData, "id" | "createdAt" | "updatedAt">): CrmEmailSequenceData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmEmailSequenceData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmEmailSequenceValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmEmailSequence: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmEmailSequenceData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmEmailSequenceData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmEmailSequenceData>): CrmEmailSequenceData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmEmailSequenceData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
