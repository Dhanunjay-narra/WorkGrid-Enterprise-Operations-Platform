export type HrRecruitmentRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentRuleStateMachine {
  private allowedTransitions: Record<HrRecruitmentRuleState, HrRecruitmentRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentRuleState, to: HrRecruitmentRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentRuleState, to: HrRecruitmentRuleState): HrRecruitmentRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentRule: " + from + " -> " + to);
    }
    return to;
  }
}
