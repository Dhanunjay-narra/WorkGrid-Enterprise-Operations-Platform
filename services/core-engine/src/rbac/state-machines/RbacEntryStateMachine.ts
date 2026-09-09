export type RbacEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacEntryStateMachine {
  private allowedTransitions: Record<RbacEntryState, RbacEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacEntryState, to: RbacEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacEntryState, to: RbacEntryState): RbacEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacEntry: " + from + " -> " + to);
    }
    return to;
  }
}
