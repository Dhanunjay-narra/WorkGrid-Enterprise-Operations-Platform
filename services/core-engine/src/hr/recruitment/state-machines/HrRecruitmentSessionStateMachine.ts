export type HrRecruitmentSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentSessionStateMachine {
  private allowedTransitions: Record<HrRecruitmentSessionState, HrRecruitmentSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentSessionState, to: HrRecruitmentSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentSessionState, to: HrRecruitmentSessionState): HrRecruitmentSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentSession: " + from + " -> " + to);
    }
    return to;
  }
}
