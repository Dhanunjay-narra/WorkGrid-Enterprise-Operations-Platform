import { FinRefundRecordData, FinRefundRecordValidator } from "../../../../packages/types/src/domains/finance/FinRefundRecord";

export class FinRefundRecordService {
  private repository = new Map<string, FinRefundRecordData>();

  public create(data: Omit<FinRefundRecordData, "id" | "createdAt" | "updatedAt">): FinRefundRecordData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinRefundRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinRefundRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinRefundRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinRefundRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinRefundRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinRefundRecordData>): FinRefundRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinRefundRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
