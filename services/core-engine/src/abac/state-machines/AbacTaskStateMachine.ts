export type AbacTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacTaskStateMachine {
  private allowedTransitions: Record<AbacTaskState, AbacTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacTaskState, to: AbacTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacTaskState, to: AbacTaskState): AbacTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacTask: " + from + " -> " + to);
    }
    return to;
  }
}
