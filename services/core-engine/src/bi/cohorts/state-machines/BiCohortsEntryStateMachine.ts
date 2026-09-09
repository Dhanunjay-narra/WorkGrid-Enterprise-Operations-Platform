export type BiCohortsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsEntryStateMachine {
  private allowedTransitions: Record<BiCohortsEntryState, BiCohortsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsEntryState, to: BiCohortsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsEntryState, to: BiCohortsEntryState): BiCohortsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
