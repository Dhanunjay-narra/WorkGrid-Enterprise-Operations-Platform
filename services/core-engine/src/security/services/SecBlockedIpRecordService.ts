import { SecBlockedIpRecordData, SecBlockedIpRecordValidator } from "../../../../packages/types/src/domains/security/SecBlockedIpRecord";

export class SecBlockedIpRecordService {
  private repository = new Map<string, SecBlockedIpRecordData>();

  public create(data: Omit<SecBlockedIpRecordData, "id" | "createdAt" | "updatedAt">): SecBlockedIpRecordData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecBlockedIpRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecBlockedIpRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecBlockedIpRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecBlockedIpRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecBlockedIpRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecBlockedIpRecordData>): SecBlockedIpRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecBlockedIpRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
