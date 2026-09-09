export type AbacProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacProfileStateMachine {
  private allowedTransitions: Record<AbacProfileState, AbacProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacProfileState, to: AbacProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacProfileState, to: AbacProfileState): AbacProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacProfile: " + from + " -> " + to);
    }
    return to;
  }
}
