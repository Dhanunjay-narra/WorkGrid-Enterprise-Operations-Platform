import { SecDeviceTrustRecordData, SecDeviceTrustRecordValidator } from "../../../../packages/types/src/domains/security/SecDeviceTrustRecord";

export class SecDeviceTrustRecordService {
  private repository = new Map<string, SecDeviceTrustRecordData>();

  public create(data: Omit<SecDeviceTrustRecordData, "id" | "createdAt" | "updatedAt">): SecDeviceTrustRecordData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecDeviceTrustRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecDeviceTrustRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecDeviceTrustRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecDeviceTrustRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecDeviceTrustRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecDeviceTrustRecordData>): SecDeviceTrustRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecDeviceTrustRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
