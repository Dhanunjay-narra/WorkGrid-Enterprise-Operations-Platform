export type BiCohortsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsConfigStateMachine {
  private allowedTransitions: Record<BiCohortsConfigState, BiCohortsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsConfigState, to: BiCohortsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsConfigState, to: BiCohortsConfigState): BiCohortsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
