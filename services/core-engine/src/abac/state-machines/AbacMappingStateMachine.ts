export type AbacMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacMappingStateMachine {
  private allowedTransitions: Record<AbacMappingState, AbacMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacMappingState, to: AbacMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacMappingState, to: AbacMappingState): AbacMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacMapping: " + from + " -> " + to);
    }
    return to;
  }
}
