import { EvtAckReceiptData, EvtAckReceiptValidator } from "../../../../packages/types/src/domains/events/EvtAckReceipt";

export class EvtAckReceiptService {
  private repository = new Map<string, EvtAckReceiptData>();

  public create(data: Omit<EvtAckReceiptData, "id" | "createdAt" | "updatedAt">): EvtAckReceiptData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtAckReceiptData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtAckReceiptValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtAckReceipt: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtAckReceiptData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtAckReceiptData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtAckReceiptData>): EvtAckReceiptData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtAckReceiptData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
