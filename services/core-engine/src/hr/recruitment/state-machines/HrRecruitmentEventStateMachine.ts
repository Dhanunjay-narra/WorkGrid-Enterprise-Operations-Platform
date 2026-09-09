export type HrRecruitmentEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentEventStateMachine {
  private allowedTransitions: Record<HrRecruitmentEventState, HrRecruitmentEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentEventState, to: HrRecruitmentEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentEventState, to: HrRecruitmentEventState): HrRecruitmentEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentEvent: " + from + " -> " + to);
    }
    return to;
  }
}
