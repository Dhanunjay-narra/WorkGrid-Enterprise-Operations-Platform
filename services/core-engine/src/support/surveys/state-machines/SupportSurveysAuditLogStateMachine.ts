export type SupportSurveysAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysAuditLogStateMachine {
  private allowedTransitions: Record<SupportSurveysAuditLogState, SupportSurveysAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysAuditLogState, to: SupportSurveysAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysAuditLogState, to: SupportSurveysAuditLogState): SupportSurveysAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
