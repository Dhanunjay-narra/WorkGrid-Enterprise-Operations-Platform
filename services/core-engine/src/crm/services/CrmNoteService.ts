import { CrmNoteData, CrmNoteValidator } from "../../../../packages/types/src/domains/crm/CrmNote";

export class CrmNoteService {
  private repository = new Map<string, CrmNoteData>();

  public create(data: Omit<CrmNoteData, "id" | "createdAt" | "updatedAt">): CrmNoteData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmNoteData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmNoteValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmNote: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmNoteData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmNoteData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmNoteData>): CrmNoteData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmNoteData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
