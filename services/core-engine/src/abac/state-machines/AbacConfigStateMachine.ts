export type AbacConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacConfigStateMachine {
  private allowedTransitions: Record<AbacConfigState, AbacConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacConfigState, to: AbacConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacConfigState, to: AbacConfigState): AbacConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacConfig: " + from + " -> " + to);
    }
    return to;
  }
}
