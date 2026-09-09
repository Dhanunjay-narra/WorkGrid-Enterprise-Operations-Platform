import { SecTamperLogData, SecTamperLogValidator } from "../../../../packages/types/src/domains/security/SecTamperLog";

export class SecTamperLogService {
  private repository = new Map<string, SecTamperLogData>();

  public create(data: Omit<SecTamperLogData, "id" | "createdAt" | "updatedAt">): SecTamperLogData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecTamperLogData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecTamperLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecTamperLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecTamperLogData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecTamperLogData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecTamperLogData>): SecTamperLogData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecTamperLogData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
