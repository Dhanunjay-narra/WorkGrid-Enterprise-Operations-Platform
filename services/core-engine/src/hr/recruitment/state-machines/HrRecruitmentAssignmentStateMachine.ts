export type HrRecruitmentAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentAssignmentStateMachine {
  private allowedTransitions: Record<HrRecruitmentAssignmentState, HrRecruitmentAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentAssignmentState, to: HrRecruitmentAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentAssignmentState, to: HrRecruitmentAssignmentState): HrRecruitmentAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
