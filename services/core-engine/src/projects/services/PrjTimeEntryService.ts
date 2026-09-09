import { PrjTimeEntryData, PrjTimeEntryValidator } from "../../../../packages/types/src/domains/projects/PrjTimeEntry";

export class PrjTimeEntryService {
  private repository = new Map<string, PrjTimeEntryData>();

  public create(data: Omit<PrjTimeEntryData, "id" | "createdAt" | "updatedAt">): PrjTimeEntryData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjTimeEntryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjTimeEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjTimeEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjTimeEntryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjTimeEntryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjTimeEntryData>): PrjTimeEntryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjTimeEntryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
