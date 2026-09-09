export type BiCohortsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsTaskStateMachine {
  private allowedTransitions: Record<BiCohortsTaskState, BiCohortsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsTaskState, to: BiCohortsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsTaskState, to: BiCohortsTaskState): BiCohortsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsTask: " + from + " -> " + to);
    }
    return to;
  }
}
