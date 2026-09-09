export type BiCohortsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsSessionStateMachine {
  private allowedTransitions: Record<BiCohortsSessionState, BiCohortsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsSessionState, to: BiCohortsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsSessionState, to: BiCohortsSessionState): BiCohortsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsSession: " + from + " -> " + to);
    }
    return to;
  }
}
