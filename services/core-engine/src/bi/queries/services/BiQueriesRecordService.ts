import { BiQueriesRecordModel, BiQueriesRecordValidator } from "@nexora/types/domains/bi/queries/BiQueriesRecord";

export class BiQueriesRecordService {
  private repository = new Map<string, BiQueriesRecordModel>();

  public create(data: Omit<BiQueriesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesRecordModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesRecordModel>): BiQueriesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesRecordModel = {
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
