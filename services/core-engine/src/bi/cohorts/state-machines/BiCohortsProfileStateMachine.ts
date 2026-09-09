export type BiCohortsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsProfileStateMachine {
  private allowedTransitions: Record<BiCohortsProfileState, BiCohortsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsProfileState, to: BiCohortsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsProfileState, to: BiCohortsProfileState): BiCohortsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
