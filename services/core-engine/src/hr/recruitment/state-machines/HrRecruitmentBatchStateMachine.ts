export type HrRecruitmentBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentBatchStateMachine {
  private allowedTransitions: Record<HrRecruitmentBatchState, HrRecruitmentBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentBatchState, to: HrRecruitmentBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentBatchState, to: HrRecruitmentBatchState): HrRecruitmentBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentBatch: " + from + " -> " + to);
    }
    return to;
  }
}
