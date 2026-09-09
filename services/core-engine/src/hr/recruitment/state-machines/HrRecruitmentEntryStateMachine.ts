export type HrRecruitmentEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentEntryStateMachine {
  private allowedTransitions: Record<HrRecruitmentEntryState, HrRecruitmentEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentEntryState, to: HrRecruitmentEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentEntryState, to: HrRecruitmentEntryState): HrRecruitmentEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentEntry: " + from + " -> " + to);
    }
    return to;
  }
}
