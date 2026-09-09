import { DmsFilesTransactionModel, DmsFilesTransactionValidator } from "@nexora/types/domains/dms/files/DmsFilesTransaction";

export class DmsFilesTransactionService {
  private repository = new Map<string, DmsFilesTransactionModel>();

  public create(data: Omit<DmsFilesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesTransactionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesTransactionModel>): DmsFilesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesTransactionModel = {
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
