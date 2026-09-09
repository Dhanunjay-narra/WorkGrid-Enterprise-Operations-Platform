export type HrRecruitmentTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentTransactionStateMachine {
  private allowedTransitions: Record<HrRecruitmentTransactionState, HrRecruitmentTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentTransactionState, to: HrRecruitmentTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentTransactionState, to: HrRecruitmentTransactionState): HrRecruitmentTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
