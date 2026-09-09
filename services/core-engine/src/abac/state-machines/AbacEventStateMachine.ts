export type AbacEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacEventStateMachine {
  private allowedTransitions: Record<AbacEventState, AbacEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacEventState, to: AbacEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacEventState, to: AbacEventState): AbacEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacEvent: " + from + " -> " + to);
    }
    return to;
  }
}
