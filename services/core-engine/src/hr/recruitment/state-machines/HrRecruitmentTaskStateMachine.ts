export type HrRecruitmentTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentTaskStateMachine {
  private allowedTransitions: Record<HrRecruitmentTaskState, HrRecruitmentTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentTaskState, to: HrRecruitmentTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentTaskState, to: HrRecruitmentTaskState): HrRecruitmentTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentTask: " + from + " -> " + to);
    }
    return to;
  }
}
