export type RbacEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacEventStateMachine {
  private allowedTransitions: Record<RbacEventState, RbacEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacEventState, to: RbacEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacEventState, to: RbacEventState): RbacEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacEvent: " + from + " -> " + to);
    }
    return to;
  }
}
