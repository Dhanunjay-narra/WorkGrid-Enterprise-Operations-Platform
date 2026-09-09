export type RbacProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacProfileStateMachine {
  private allowedTransitions: Record<RbacProfileState, RbacProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacProfileState, to: RbacProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacProfileState, to: RbacProfileState): RbacProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacProfile: " + from + " -> " + to);
    }
    return to;
  }
}
