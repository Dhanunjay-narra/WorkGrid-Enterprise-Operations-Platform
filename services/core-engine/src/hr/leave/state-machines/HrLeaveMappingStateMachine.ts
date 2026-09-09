export type HrLeaveMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveMappingStateMachine {
  private allowedTransitions: Record<HrLeaveMappingState, HrLeaveMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveMappingState, to: HrLeaveMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveMappingState, to: HrLeaveMappingState): HrLeaveMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveMapping: " + from + " -> " + to);
    }
    return to;
  }
}
