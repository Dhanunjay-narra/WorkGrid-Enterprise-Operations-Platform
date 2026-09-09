export type HrRecruitmentThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentThresholdStateMachine {
  private allowedTransitions: Record<HrRecruitmentThresholdState, HrRecruitmentThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentThresholdState, to: HrRecruitmentThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentThresholdState, to: HrRecruitmentThresholdState): HrRecruitmentThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
