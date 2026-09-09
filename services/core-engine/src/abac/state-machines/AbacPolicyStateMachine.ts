export type AbacPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacPolicyStateMachine {
  private allowedTransitions: Record<AbacPolicyState, AbacPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacPolicyState, to: AbacPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacPolicyState, to: AbacPolicyState): AbacPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
