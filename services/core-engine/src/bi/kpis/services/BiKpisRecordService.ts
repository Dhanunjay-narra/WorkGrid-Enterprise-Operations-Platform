import { BiKpisRecordModel, BiKpisRecordValidator } from "@nexora/types/domains/bi/kpis/BiKpisRecord";

export class BiKpisRecordService {
  private repository = new Map<string, BiKpisRecordModel>();

  public create(data: Omit<BiKpisRecordModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisRecordModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisRecordModel>): BiKpisRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisRecordModel = {
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
