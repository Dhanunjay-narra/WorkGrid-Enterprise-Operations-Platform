export type HrRecruitmentConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentConfigStateMachine {
  private allowedTransitions: Record<HrRecruitmentConfigState, HrRecruitmentConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentConfigState, to: HrRecruitmentConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentConfigState, to: HrRecruitmentConfigState): HrRecruitmentConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentConfig: " + from + " -> " + to);
    }
    return to;
  }
}
