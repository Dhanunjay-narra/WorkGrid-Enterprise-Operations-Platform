export type HrRecruitmentSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentSummaryStateMachine {
  private allowedTransitions: Record<HrRecruitmentSummaryState, HrRecruitmentSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentSummaryState, to: HrRecruitmentSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentSummaryState, to: HrRecruitmentSummaryState): HrRecruitmentSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentSummary: " + from + " -> " + to);
    }
    return to;
  }
}
