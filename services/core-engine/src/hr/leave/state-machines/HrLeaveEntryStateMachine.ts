export type HrLeaveEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveEntryStateMachine {
  private allowedTransitions: Record<HrLeaveEntryState, HrLeaveEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveEntryState, to: HrLeaveEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveEntryState, to: HrLeaveEntryState): HrLeaveEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveEntry: " + from + " -> " + to);
    }
    return to;
  }
}
