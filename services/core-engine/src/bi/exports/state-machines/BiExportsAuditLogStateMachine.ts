export type BiExportsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsAuditLogStateMachine {
  private allowedTransitions: Record<BiExportsAuditLogState, BiExportsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsAuditLogState, to: BiExportsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsAuditLogState, to: BiExportsAuditLogState): BiExportsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
