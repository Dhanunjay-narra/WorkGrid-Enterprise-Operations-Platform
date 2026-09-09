export type HrRecruitmentProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentProfileStateMachine {
  private allowedTransitions: Record<HrRecruitmentProfileState, HrRecruitmentProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentProfileState, to: HrRecruitmentProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentProfileState, to: HrRecruitmentProfileState): HrRecruitmentProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentProfile: " + from + " -> " + to);
    }
    return to;
  }
}
