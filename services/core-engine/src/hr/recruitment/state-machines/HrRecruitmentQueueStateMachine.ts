export type HrRecruitmentQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentQueueStateMachine {
  private allowedTransitions: Record<HrRecruitmentQueueState, HrRecruitmentQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentQueueState, to: HrRecruitmentQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentQueueState, to: HrRecruitmentQueueState): HrRecruitmentQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentQueue: " + from + " -> " + to);
    }
    return to;
  }
}
