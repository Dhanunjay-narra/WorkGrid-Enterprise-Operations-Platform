export type HrRecruitmentStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentStateStateMachine {
  private allowedTransitions: Record<HrRecruitmentStateState, HrRecruitmentStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentStateState, to: HrRecruitmentStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentStateState, to: HrRecruitmentStateState): HrRecruitmentStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentState: " + from + " -> " + to);
    }
    return to;
  }
}
