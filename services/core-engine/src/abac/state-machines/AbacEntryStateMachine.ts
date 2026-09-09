export type AbacEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacEntryStateMachine {
  private allowedTransitions: Record<AbacEntryState, AbacEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacEntryState, to: AbacEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacEntryState, to: AbacEntryState): AbacEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacEntry: " + from + " -> " + to);
    }
    return to;
  }
}
