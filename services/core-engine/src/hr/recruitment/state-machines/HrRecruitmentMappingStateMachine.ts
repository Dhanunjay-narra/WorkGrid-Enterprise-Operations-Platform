export type HrRecruitmentMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentMappingStateMachine {
  private allowedTransitions: Record<HrRecruitmentMappingState, HrRecruitmentMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentMappingState, to: HrRecruitmentMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentMappingState, to: HrRecruitmentMappingState): HrRecruitmentMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentMapping: " + from + " -> " + to);
    }
    return to;
  }
}
