export type HrRecruitmentPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentPolicyStateMachine {
  private allowedTransitions: Record<HrRecruitmentPolicyState, HrRecruitmentPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentPolicyState, to: HrRecruitmentPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentPolicyState, to: HrRecruitmentPolicyState): HrRecruitmentPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
