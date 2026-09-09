export type DmsSignaturesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesAuditLogStateMachine {
  private allowedTransitions: Record<DmsSignaturesAuditLogState, DmsSignaturesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesAuditLogState, to: DmsSignaturesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesAuditLogState, to: DmsSignaturesAuditLogState): DmsSignaturesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
