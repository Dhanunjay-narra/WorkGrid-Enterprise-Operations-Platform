import { FinanceBillsPayloadModel, FinanceBillsPayloadValidator } from "@nexora/types/domains/finance/bills/FinanceBillsPayload";

export class FinanceBillsPayloadService {
  private repository = new Map<string, FinanceBillsPayloadModel>();

  public create(data: Omit<FinanceBillsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsPayloadModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsPayloadModel>): FinanceBillsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsPayloadModel = {
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
