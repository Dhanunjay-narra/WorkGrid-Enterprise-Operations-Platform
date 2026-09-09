import { BiWidgetsRecordModel, BiWidgetsRecordValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsRecord";

export class BiWidgetsRecordService {
  private repository = new Map<string, BiWidgetsRecordModel>();

  public create(data: Omit<BiWidgetsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsRecordModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsRecordModel>): BiWidgetsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsRecordModel = {
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
