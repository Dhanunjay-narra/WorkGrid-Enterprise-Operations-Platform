export type BiCohortsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsEventStateMachine {
  private allowedTransitions: Record<BiCohortsEventState, BiCohortsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsEventState, to: BiCohortsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsEventState, to: BiCohortsEventState): BiCohortsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
