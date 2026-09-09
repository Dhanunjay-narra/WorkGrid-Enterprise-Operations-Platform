import { InvBatchSerialData, InvBatchSerialValidator } from "../../../../packages/types/src/domains/inventory/InvBatchSerial";

export class InvBatchSerialService {
  private repository = new Map<string, InvBatchSerialData>();

  public create(data: Omit<InvBatchSerialData, "id" | "createdAt" | "updatedAt">): InvBatchSerialData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvBatchSerialData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvBatchSerialValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvBatchSerial: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvBatchSerialData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvBatchSerialData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvBatchSerialData>): InvBatchSerialData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvBatchSerialData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
