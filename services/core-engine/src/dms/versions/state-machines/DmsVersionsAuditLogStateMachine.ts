export type DmsVersionsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsAuditLogStateMachine {
  private allowedTransitions: Record<DmsVersionsAuditLogState, DmsVersionsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsAuditLogState, to: DmsVersionsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsAuditLogState, to: DmsVersionsAuditLogState): DmsVersionsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
