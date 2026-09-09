export type HrRecruitmentItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentItemStateMachine {
  private allowedTransitions: Record<HrRecruitmentItemState, HrRecruitmentItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentItemState, to: HrRecruitmentItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentItemState, to: HrRecruitmentItemState): HrRecruitmentItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentItem: " + from + " -> " + to);
    }
    return to;
  }
}
