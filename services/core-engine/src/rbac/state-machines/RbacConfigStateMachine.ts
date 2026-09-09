export type RbacConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacConfigStateMachine {
  private allowedTransitions: Record<RbacConfigState, RbacConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacConfigState, to: RbacConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacConfigState, to: RbacConfigState): RbacConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacConfig: " + from + " -> " + to);
    }
    return to;
  }
}
