export type BiCohortsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsNodeStateMachine {
  private allowedTransitions: Record<BiCohortsNodeState, BiCohortsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsNodeState, to: BiCohortsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsNodeState, to: BiCohortsNodeState): BiCohortsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsNode: " + from + " -> " + to);
    }
    return to;
  }
}
