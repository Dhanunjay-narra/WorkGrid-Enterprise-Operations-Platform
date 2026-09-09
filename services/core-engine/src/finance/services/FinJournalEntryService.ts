import { FinJournalEntryData, FinJournalEntryValidator } from "../../../../packages/types/src/domains/finance/FinJournalEntry";

export class FinJournalEntryService {
  private repository = new Map<string, FinJournalEntryData>();

  public create(data: Omit<FinJournalEntryData, "id" | "createdAt" | "updatedAt">): FinJournalEntryData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinJournalEntryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinJournalEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinJournalEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinJournalEntryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinJournalEntryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinJournalEntryData>): FinJournalEntryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinJournalEntryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
