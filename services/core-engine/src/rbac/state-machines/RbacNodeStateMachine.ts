export type RbacNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacNodeStateMachine {
  private allowedTransitions: Record<RbacNodeState, RbacNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacNodeState, to: RbacNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacNodeState, to: RbacNodeState): RbacNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacNode: " + from + " -> " + to);
    }
    return to;
  }
}
