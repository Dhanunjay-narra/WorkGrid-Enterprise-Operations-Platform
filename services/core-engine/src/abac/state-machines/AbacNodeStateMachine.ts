export type AbacNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacNodeStateMachine {
  private allowedTransitions: Record<AbacNodeState, AbacNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacNodeState, to: AbacNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacNodeState, to: AbacNodeState): AbacNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacNode: " + from + " -> " + to);
    }
    return to;
  }
}
