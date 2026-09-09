export type HrRecruitmentNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentNodeStateMachine {
  private allowedTransitions: Record<HrRecruitmentNodeState, HrRecruitmentNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentNodeState, to: HrRecruitmentNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentNodeState, to: HrRecruitmentNodeState): HrRecruitmentNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentNode: " + from + " -> " + to);
    }
    return to;
  }
}
