export type HrRecruitmentAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentAuditLogStateMachine {
  private allowedTransitions: Record<HrRecruitmentAuditLogState, HrRecruitmentAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentAuditLogState, to: HrRecruitmentAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentAuditLogState, to: HrRecruitmentAuditLogState): HrRecruitmentAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
