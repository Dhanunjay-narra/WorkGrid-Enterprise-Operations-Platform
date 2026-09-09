export type BiCohortsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsStateStateMachine {
  private allowedTransitions: Record<BiCohortsStateState, BiCohortsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsStateState, to: BiCohortsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsStateState, to: BiCohortsStateState): BiCohortsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsState: " + from + " -> " + to);
    }
    return to;
  }
}
