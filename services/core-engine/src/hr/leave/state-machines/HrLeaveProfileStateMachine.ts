export type HrLeaveProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveProfileStateMachine {
  private allowedTransitions: Record<HrLeaveProfileState, HrLeaveProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveProfileState, to: HrLeaveProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveProfileState, to: HrLeaveProfileState): HrLeaveProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveProfile: " + from + " -> " + to);
    }
    return to;
  }
}
