export type HrShiftsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsAuditLogStateMachine {
  private allowedTransitions: Record<HrShiftsAuditLogState, HrShiftsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsAuditLogState, to: HrShiftsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsAuditLogState, to: HrShiftsAuditLogState): HrShiftsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
